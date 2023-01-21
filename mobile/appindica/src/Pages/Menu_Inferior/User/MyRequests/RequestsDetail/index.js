import React, { useState, useEffect } from "react";
import { FlatList, View, ScrollView, Picker } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ComponenteHeader from "../../../../../Components/Header";

import {
  Container,
  Listing,
  ProductListing,
  ProductListingImg,
  ProductInformation,
  ProductInformationName,
  ProductInformationSize,
  Description,
  DescriptionAmount,
  Amount,
  DescriptionPrice,
  HorizontalLine,
  OptionsContainer,
  OptionsTitle,
  OptionsSelectTitle,
  CheckoutContainer,
  Checkout,
  CheckoutAmount,
  CheckoutAmountText,
  CheckoutAmountValue,
  CheckoutTotal,
  CheckoutTotalText,
  CheckoutTotalValue,
  DeliveryContainer,
  DeliveryInformation,
  OptionsValue
} from "./styles";

function RequestsDetail() {
  const nav = useNavigation();

  const [deliveryOption, setDeliveryOption] = React.useState("0");
  const [calculateTotalValue, setCalculateTotalValue] = React.useState(0);
  const [amount, setAmount] = useState("1");
  const [products, setProducts] = useState([
    {
      image: require("../../../../../assets/imagens/lancamento1.jpeg"),
      id: "1",
      description: "Moleton Azul",
      size: "M",
      priceDiscount: 60,
      amount: 1,
      payment: "À vista",
      
    },
    {
      image: require("../../../../../assets/imagens/lancamento2.jpeg"),
      id: "2",
      description: "Calça preta",
      size: "M",
      priceDiscount: 120.00,
      amount: 2,
      payment: "À vista",

    }
  ]);

  function deliveryFilter(){
    if (deliveryOption === "0"){
      return (
      <>
        <DeliveryContainer>
            <DeliveryInformation>
              <OptionsTitle>Valor Entrega</OptionsTitle>     
            </DeliveryInformation>
            <OptionsValue>R$ 4,00</OptionsValue>
        </DeliveryContainer>
        <HorizontalLine/>
      </>
      )
    }
  }
//total da compra
  useEffect(() => {
    products.map(item => {
      var soma = calculateTotalValue + item.priceDiscount;
        setCalculateTotalValue(soma);
    });
  }, []);

  return (
    <Container>
      <ComponenteHeader
        buttonBack={true}
        displayLogo={false}
        titleText="Detalhe do Pedido"
      />
      <ScrollView>
        <Listing>
          <FlatList
            numColumns={1}
            scrollEnabled={true}
            keyExtractor={item => item.id}
            data={products}
            onEndReachedThreshold={0.1}
            renderItem={({ item }) => (
              <>
                <ProductListing>
                  <ProductListingImg source={item.image} />
                  <ProductInformation>
                    <ProductInformationName numberOfLines={1}>{item.description}</ProductInformationName>
                    <ProductInformationSize>{"Tamanho: " + item.size}</ProductInformationSize>
                    <Description>
                      <DescriptionAmount>
                         <Amount>
                         {"Quantidade: " + item.amount}
                         </Amount>
                      </DescriptionAmount>
                      <DescriptionPrice>
                        {"R$ " +
                          parseFloat(item.priceDiscount) *
                            parseFloat(amount)}
                      </DescriptionPrice>
                    </Description>
                  </ProductInformation>
                </ProductListing>
                </>
           )}
         ></FlatList>
          <OptionsContainer>
            <OptionsTitle>
               Entrega Selecionada
            </OptionsTitle>
            <OptionsSelectTitle>Buscar na Loja</OptionsSelectTitle>
            <HorizontalLine/>
          </OptionsContainer>
          <View>
            {deliveryFilter()}
          </View> 
          <CheckoutContainer>
            <Checkout>
              <CheckoutAmount>
                <CheckoutAmountText>Produtos</CheckoutAmountText>
                <CheckoutAmountValue>2</CheckoutAmountValue>
              </CheckoutAmount>
              <CheckoutTotal>
                <CheckoutTotalText>Total</CheckoutTotalText>
                <CheckoutTotalValue>{"R$ "+calculateTotalValue}</CheckoutTotalValue>
              </CheckoutTotal>
            </Checkout>
          </CheckoutContainer>
        </Listing>
      </ScrollView>
    </Container>
  );
}

export default RequestsDetail;

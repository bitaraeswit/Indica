import React, { useState } from "react";
import { FlatList, Dimensions, ScrollView, Picker } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ComponenteHeader from "../../../Components/Header";
import ComponentButton from "../../../Components/Button";

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
  DescriptionPrice,
  HorizontalLine,
  CheckoutContainer,
  Checkout,
  CheckoutAmount,
  CheckoutAmountText,
  CheckoutAmountValue,
  CheckoutTotal,
  CheckoutTotalText,
  CheckoutTotalValue,
  ContainerButton
} from "./styles";

function ShoppingCart() {
  const nav = useNavigation();

  const [amount, setAmount] = useState("1");
  const [products, setProducts] = useState([
    {
      image: require("../../../assets/imagens/lancamento1.jpeg"),
      id: "1",
      description: "Moleton to da moda super grande",
      size: "M",
      priceDiscount: "79,99"
    },
    {
      image: require("../../../assets/imagens/lancamento2.jpeg"),
      id: "2",
      description: "Moleton to da moda",
      size: "M",
      priceDiscount: "79,99"
    },
    {
      image: require("../../../assets/imagens/lancamento3.jpeg"),
      id: "3",
      description: "Moleton to da moda",
      size: "M",
      priceDiscount: "79,99"
    }
  ]);

  function handlePurchasingOptions(){
    nav.navigate('PurchasingOptions');
  }

  return (
    <Container>
      <ComponenteHeader
        buttonBack={false}
        displayLogo={false}
        titleText="Carrinho"
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
                    <ProductInformationSize>{"size: " + item.size}</ProductInformationSize>
                    <Description>
                      <DescriptionAmount>
                        <Picker
                          prompt="Quantidade"
                          itemStyle={{
                            fontSize: 14,
                            fontFamily: "Nunito-Regular",
                            color: "#696969",
                            alignItems: "center"
                          }}
                          style={{ width: 75 }}
                          selectedValue={amount}
                          onValueChange={(itemValor, itemIndex) =>
                            setAmount(itemValor)
                          }
                        >
                          <Picker.Item color="#696969" label="1" value="1" />
                          <Picker.Item color="#696969" label="2" value="2" />
                          <Picker.Item color="#696969" label="3" value="3" />
                          <Picker.Item color="#696969" label="4" value="4" />
                          <Picker.Item color="#696969" label="5" value="5" />
                        </Picker>
                      </DescriptionAmount>
                      <DescriptionPrice>
                        {"R$ " +
                          parseFloat(item.priceDiscount) *
                            parseFloat(amount)}
                      </DescriptionPrice>
                    </Description>
                  </ProductInformation>
                </ProductListing>
                <HorizontalLine/>
              </>
            )}
          ></FlatList>
        </Listing>
      </ScrollView>
      <CheckoutContainer>
        <Checkout>
          <CheckoutAmount>
            <CheckoutAmountText>Produtos</CheckoutAmountText>
            <CheckoutAmountValue>4</CheckoutAmountValue>
          </CheckoutAmount>
          <CheckoutTotal>
            <CheckoutTotalText>Total</CheckoutTotalText>
            <CheckoutTotalValue>R$ 100,00</CheckoutTotalValue>
          </CheckoutTotal>
        </Checkout>
        <ContainerButton>
        <ComponentButton onPress={handlePurchasingOptions}>Finalizar compra</ComponentButton>
        </ContainerButton>
      </CheckoutContainer>
    </Container>
  );
}

export default ShoppingCart;

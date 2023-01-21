import React, { useState, useEffect } from "react";
import { FlatList, View, ScrollView, Picker } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from 'react-native-paper';

import ComponenteHeader from "../../Components/Header";
import ComponentButton from "../../Components/Button";

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
  OptionsContainer,
  OptionsTitle,
  SelectionOptions,
  SelectionOptionsFirst,
  OptionsSelectTitle,
  SelectionOptionsSecond,
  CheckoutContainer,
  Checkout,
  CheckoutAmount,
  CheckoutAmountText,
  CheckoutAmountValue,
  CheckoutTotal,
  CheckoutTotalText,
  CheckoutTotalValue,
  ContainerButton,
  DeliveryContainer,
  DeliveryInformation,
  OptionsValue,
  OptionsCaption
} from "./styles";

function PurchasingOptions() {
  const nav = useNavigation();

  const [deliveryOption, setDeliveryOption] = React.useState("0");
  const [paymentMethod, setPaymentMethod] = React.useState("0");
  const [calculateTotalValue, setCalculateTotalValue] = React.useState(0);
  const [amount, setAmount] = useState("1");
  const [products, setProducts] = useState([
    {
      image: require("../../assets/imagens/lancamento1.jpeg"),
      id: "1",
      description: "Moleton to da moda super grande",
      size: "M",
      priceDiscount: 79.99
    },
    {
      image: require("../../assets/imagens/lancamento2.jpeg"),
      id: "2",
      description: "Moleton to da moda",
      size: "M",
      priceDiscount: 79.99
    },
    {
      image: require("../../assets/imagens/lancamento3.jpeg"),
      id: "3",
      description: "Moleton to da moda",
      size: "M",
      priceDiscount: 79.99
    }
  ]);

  function handleCheckout(){
    nav.navigate('Checkout');
  }

  // calcula a soma dos preços da compra
  useEffect(() => {
    products.map(item => {
      var soma = calculateTotalValue + item.priceDiscount;
      setCalculateTotalValue(soma);
    });
  }, []);

  // verifica se a opção de entrega é "em casa"
  function deliveryFilter(){
    if (deliveryOption === "0"){
      return (
      <>
        <DeliveryContainer>
            <DeliveryInformation>
              <OptionsTitle>Entrega</OptionsTitle>
              <OptionsValue>R$ 4,00</OptionsValue>
            </DeliveryInformation>
            <OptionsCaption>1 dia útil</OptionsCaption>
        </DeliveryContainer>
        <HorizontalLine/>
      </>
      )
    }
  }

  return (
    <Container>
      <ComponenteHeader
        buttonBack={true}
        displayLogo={false}
        titleText="Opções de compra"
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
                            fontSize: 16,
                            fontFamily: "Nunito-Bold",
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
      <OptionsContainer>
        <OptionsTitle>
          1. Opções de entrega
        </OptionsTitle>
        <RadioButton.Group onValueChange={deliveryOption => setDeliveryOption(deliveryOption)} value={deliveryOption}>
        <SelectionOptions>
          <SelectionOptionsFirst>
            <OptionsSelectTitle>Em casa</OptionsSelectTitle>
            <RadioButton value="0" color="#9728ad"/>
          </SelectionOptionsFirst>
          <SelectionOptionsSecond>
            <OptionsSelectTitle>Retirar na loja</OptionsSelectTitle>
            <RadioButton value="1" color="#9728ad"/>
          </SelectionOptionsSecond>
          </SelectionOptions>
      </RadioButton.Group>
      <HorizontalLine/>
      </OptionsContainer>
        <View>
          {deliveryFilter()}
        </View> 
      <OptionsContainer>
        <OptionsTitle>
          2. Método de pagamento
        </OptionsTitle>
        <RadioButton.Group onValueChange={paymentMethod => setPaymentMethod(paymentMethod)} value={paymentMethod}>
        <SelectionOptions>
          <SelectionOptionsFirst>
            <OptionsSelectTitle>À vista</OptionsSelectTitle>
            <RadioButton value="first" color="#9728ad"/>
          </SelectionOptionsFirst>
          <SelectionOptionsSecond>
            <OptionsSelectTitle>Cartão de crédito/débito</OptionsSelectTitle>
            <RadioButton value="second" color="#9728ad"/>
          </SelectionOptionsSecond>
          </SelectionOptions>
        </RadioButton.Group>
      </OptionsContainer>
      <CheckoutContainer>
        <Checkout>
          <CheckoutAmount>
            <CheckoutAmountText>Produtos</CheckoutAmountText>
            <CheckoutAmountValue>4</CheckoutAmountValue>
          </CheckoutAmount>
          <CheckoutTotal>
            <CheckoutTotalText>Total</CheckoutTotalText>
            <CheckoutTotalValue>{"R$ "+calculateTotalValue}</CheckoutTotalValue>
          </CheckoutTotal>
        </Checkout>
        <ContainerButton>
        <ComponentButton onPress={handleCheckout}>Finalizar compra</ComponentButton>
        </ContainerButton>
      </CheckoutContainer>
      </ScrollView>
    </Container>
  );
}

export default PurchasingOptions;

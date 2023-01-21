import React, { useState } from "react";
import {ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import ComponenteHeader from "../../Components/Header";
import ComponentButton from "../../Components/Button";

import {
  Container,
  DeliveryAddress,
  Title,
  Value,
  ButtonContainer,
  DeliveryAddressCaption,
  HorizontalLine,
  DeliveryContainer,
  DeliveryAddressDetail,
  DeliveryInformation,
  OptionsCaption,
  FormPayment,
  DiscountContainer,
  Discount,
  InputContainer,
  InputText,
  PurchaseSummaryContainer,
  PurchaseSummary,
  PurchaseSummaryItem,
  ButtonContainerPurchase
} from "./styles";

function Checkout() {
  const nav = useNavigation();

  const [adresses, setAdresses] = useState([
    {
      id: "1",
      address: "Av. José Niquini",
      number: 48,
      neighborhood: "Centro",
      city: "Jequeri",
      state: "MG",
      zipCode: "35390-000",
    }
  ]);

  return (
    <Container>
      <ComponenteHeader
        buttonBack={true}
        displayLogo={false}
        titleText="Finalizar compra"
      />
      <ScrollView>
        <DeliveryAddress>
          <Title>Endereço de entrega</Title>
            {
              adresses.map(item => (
              <DeliveryAddressDetail key={item}>
                <DeliveryAddressCaption>{item.address}, {item.number}</DeliveryAddressCaption>
                <DeliveryAddressCaption>{item.neighborhood}, {item.city}/{item.state}</DeliveryAddressCaption>
                <DeliveryAddressCaption>{"CEP: "+item.zipCode}</DeliveryAddressCaption>
              </DeliveryAddressDetail>
              ))
            }
          <ButtonContainer>
            <ComponentButton children="Alterar endereço de entrega"/>
          </ButtonContainer>
          <HorizontalLine/>
        </DeliveryAddress>
        <DeliveryContainer>
            <DeliveryInformation>
              <Title>Entrega</Title>
              <Value>R$ 4,00</Value>
            </DeliveryInformation>
            <OptionsCaption>1 dia útil</OptionsCaption>
            <HorizontalLine/>
        </DeliveryContainer>
        <FormPayment>
          <Title>Pagamento {"à vista"}</Title>
          <HorizontalLine/>
        </FormPayment>
        <DiscountContainer>
          <Title>Cupons de desconto</Title>
          <Discount>
            <InputContainer>
              <InputText
                placeholder="Digite o cupon"
                placeholderTextColor="#696969"
            />
          <Value>Aplicar</Value>
          </InputContainer>
          <HorizontalLine/>
          </Discount>
        </DiscountContainer>
        <PurchaseSummaryContainer>
            <Title>Resumo da compra</Title>
            <PurchaseSummary>
              <PurchaseSummaryItem>
                <Title>Produto(s)</Title>
                <Value>+R$ {"249.79"}</Value>
              </PurchaseSummaryItem>
              <PurchaseSummaryItem>
                <Title>Frete</Title>
                <Value>+R$ {"4,00"}</Value>
              </PurchaseSummaryItem>
              <PurchaseSummaryItem>
                <Title>Desconto</Title>
                <Value>-R$ {"10,00"}</Value>
              </PurchaseSummaryItem>
              <PurchaseSummaryItem>
                <Title>Total</Title>
                <Value>=R$ {"243,79"}</Value>
              </PurchaseSummaryItem>
            </PurchaseSummary>
          </PurchaseSummaryContainer>
          <ButtonContainer>
            <ComponentButton children="Ver itens do pedido"/>
          </ButtonContainer>
          <ButtonContainerPurchase>
            <ComponentButton children="Finalizar"/>
          </ButtonContainerPurchase>
        </ScrollView>
    </Container>
  );
}

export default Checkout;

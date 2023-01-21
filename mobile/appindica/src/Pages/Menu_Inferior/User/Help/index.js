import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import ComponentHeader from "../../../../Components/Header";

import {
  Container,
  Header,
  Listing,
  DescriptionListing,
  Title,
  LastListing
} from "./styles";

function Help() {
  const nav = useNavigation();

  function handleAbout() {
    nav.navigate("About");
  }

  function handleHowToUse() {
    nav.navigate("HowToUse");
  }

  function handlePaymentMethods() {
    nav.navigate("PaymentMethods");
  }

  function handleDeliveryWays() {
    nav.navigate("DeliveryWays");
  }

  function handlePromotionDiscounts() {
    nav.navigate("PromotionDiscounts");
  }

  function handlePoints() {
    nav.navigate("Points");
  }

  return (
    <Container>
      <ComponentHeader
        buttonBack={true}
        displayLogo={false}
        titleText="Ajuda"
      />
      <Header>Dúvidas frequentes</Header>
      <Listing>
        <DescriptionListing onPress={handleAbout}>
          <Title>Sobre o InDica</Title>
          <Icon
            name="chevron-forward"
            style={{
              fontSize: 30,
              color: "#9728AD"
            }}
          />
        </DescriptionListing>
        <DescriptionListing onPress={handleHowToUse}>
          <Title>Como usar o InDica</Title>
          <Icon
            name="chevron-forward"
            style={{
              fontSize: 30,
              color: "#9728AD"
            }}
          />
        </DescriptionListing>
        <DescriptionListing onPress={handlePaymentMethods}>
          <Title>Formas de pagamento</Title>
          <Icon
            name="chevron-forward"
            style={{
              fontSize: 30,
              color: "#9728AD"
            }}
          />
        </DescriptionListing>
        <DescriptionListing onPress={handleDeliveryWays}>
          <Title>Formas de entrega</Title>
          <Icon
            name="chevron-forward"
            style={{
              fontSize: 30,
              color: "#9728AD"
            }}
          />
        </DescriptionListing>
        <DescriptionListing onPress={handlePromotionDiscounts}>
          <Title>Promoções e descontos</Title>
          <Icon
            name="chevron-forward"
            style={{
              fontSize: 30,
              color: "#9728AD"
            }}
          />
        </DescriptionListing>
        <LastListing onPress={handlePoints}>
          <Title>Programa de pontos</Title>
          <Icon
            name="chevron-forward"
            style={{
              fontSize: 30,
              color: "#9728AD"
            }}
          />
        </LastListing>
      </Listing>
    </Container>
  );
}

export default Help;

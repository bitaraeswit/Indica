import React from "react";
import {
  ScrollView,
  BackHandler,
  Linking
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import perfil from "../../../assets/imagens/publicidade1.jpg";

import ComponentHeader from "../../../Components/Header";

import {
  Container,
  Listing,
  ProfileListing,
  ProfileListingInformation,
  ProfileContainer,
  ProfileImg,
  Title,
  Caption,
  ProfileDescription,
  NextButton,
  ListingBody,
  LeadingEdge,
  ListingBodyItens,
  ListingBodyInformation,
  ListingBodyExit
} from "./styles";

function User() {
  const nav = useNavigation();

  function handleSignIn() {
    nav.navigate("SignIn");
  }

  function fecharAplicacao() {
    BackHandler.exitApp();
  }

  function entrarContatoWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=={+5531998781566}`);
  }

  function handleAdresses() {
    nav.navigate("Adresses");
  }

  function handleMyRequests() {
    nav.navigate("MyRequests");
  }

  function handleChangeCity() {
    nav.navigate("ChangeCity");
  }

  function handleCoupon() {
    nav.navigate("Coupon");
  }

  function handleFavorites() {
    nav.navigate("Favorites");
  }

  function handleSettings() {
    nav.navigate("Settings");
  }

  function handleHelp() {
    nav.navigate("Help");
  }

  return (
    <Container>
      <ScrollView>
        <ComponentHeader
          buttonBack={false}
          displayLogo={false}
          titleText="Meu Perfil"
        />
        <Listing>
          <ProfileListing>
            <ProfileListingInformation onPress={handleSignIn}>
              <ProfileContainer>
                <ProfileImg source={perfil} />
              </ProfileContainer>
              <ProfileDescription>
                <Title>Gilson Soares</Title>
                <Caption>Editar perfil</Caption>
              </ProfileDescription>
            </ProfileListingInformation>
            <NextButton>
              <Icon
                name="chevron-forward"
                style={{
                  fontSize: 30,
                  color: "#9728AD"
                }}
              />
            </NextButton>
          </ProfileListing>
          <LeadingEdge />
          <ListingBody>
            <ListingBodyItens onPress={handleAdresses}>
              <ListingBodyInformation>
                <Title>Endereços</Title>
                <Caption>Meus endereços de entrega</Caption>
              </ListingBodyInformation>
              <NextButton>
                <Icon
                  name="chevron-forward"
                  style={{
                    fontSize: 30,
                    color: "#9728AD"
                  }}
                />
              </NextButton>
            </ListingBodyItens>
            <ListingBodyItens onPress={handleFavorites}>
              <ListingBodyInformation>
                <Title>Favoritos</Title>
                <Caption>Seus itens favoritos</Caption>
              </ListingBodyInformation>
              <NextButton>
                <Icon
                  name="chevron-forward"
                  style={{
                    fontSize: 30,
                    color: "#9728AD"
                  }}
                />
              </NextButton>
            </ListingBodyItens>
            <ListingBodyItens onPress={handleMyRequests}>
              <ListingBodyInformation>
                <Title>Meus Pedidos</Title>
                <Caption>Compras realizadas</Caption>
              </ListingBodyInformation>
              <NextButton>
                <Icon
                  name="chevron-forward"
                  style={{
                    fontSize: 30,
                    color: "#9728AD"
                  }}
                />
              </NextButton>
            </ListingBodyItens>
            <ListingBodyItens onPress={handleChangeCity}>
              <ListingBodyInformation>
                <Title>Alterar Cidade</Title>
                <Caption>Escolha o local das lojas</Caption>
              </ListingBodyInformation>
              <NextButton>
                <Icon
                  name="chevron-forward"
                  style={{
                    fontSize: 30,
                    color: "#9728AD"
                  }}
                />
              </NextButton>
            </ListingBodyItens>
            <ListingBodyItens onPress={handleCoupon}>
              <ListingBodyInformation>
                <Title>Cupom</Title>
                <Caption>Meus cupons de descontos</Caption>
              </ListingBodyInformation>
              <NextButton>
                <Icon
                  name="chevron-forward"
                  style={{
                    fontSize: 30,
                    color: "#9728AD"
                  }}
                />
              </NextButton>
            </ListingBodyItens>
            <ListingBodyItens onPress={entrarContatoWhatsapp}>
              <ListingBodyInformation>
                <Title>Fale Conosco</Title>
                <Caption>Entre em contato com o InDica</Caption>
              </ListingBodyInformation>
              <NextButton>
                <Icon
                  name="chevron-forward"
                  style={{
                    fontSize: 30,
                    color: "#9728AD"
                  }}
                />
              </NextButton>
            </ListingBodyItens>
            <ListingBodyItens onPress={handleSettings}>
              <ListingBodyInformation>
                <Title>Configurações</Title>
                <Caption>Ajuste seus dados</Caption>
              </ListingBodyInformation>
              <NextButton>
                <Icon
                  name="chevron-forward"
                  style={{
                    fontSize: 30,
                    color: "#9728AD"
                  }}
                />
              </NextButton>
            </ListingBodyItens>
            <ListingBodyItens onPress={handleHelp}>
              <ListingBodyInformation>
                <Title>Ajuda</Title>
                <Caption>Dúvidas frequentes</Caption>
              </ListingBodyInformation>
              <NextButton>
                <Icon
                  name="chevron-forward"
                  style={{
                    fontSize: 30,
                    color: "#9728AD"
                  }}
                />
              </NextButton>
            </ListingBodyItens>
            <ListingBodyExit onPress={fecharAplicacao}>
              <ListingBodyInformation>
                <Title>Sair</Title>
                <Caption>Sair da aplicação</Caption>
              </ListingBodyInformation>
            </ListingBodyExit>
          </ListingBody>
        </Listing>
      </ScrollView>
    </Container>
  );
}

export default User;

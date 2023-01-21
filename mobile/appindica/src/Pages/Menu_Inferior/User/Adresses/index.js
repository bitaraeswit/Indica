import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import ComponentHeader from "../../../../Components/Header";
import ComponentButton from "../../../../Components/Button";

import {
  Container,
  Listing,
  AdressListings,
  MyAdress,
  MyAdressName,
  MyAdressPublicPlace,
  MyAdressCity,
  MyAdressPostCard,
  MyAdressPhone,
  MyAdressDetail,
  ButtonContainer
} from "./styles";

function Adresses() {
  const nav = useNavigation();
  const [adresses, setAdresses] = useState([
    {
      id: "1",
      name: "Gilson Soares",
      address: "Av. José Niquini",
      number: 48,
      complement: "",
      neighborhood: "Centro",
      city: "Jequeri",
      state: "Minas Gerais",
      zipCode: "35390-000",
      phone: "(31) 998178-1566"
    },
    {
      id: "2",
      name: "Gilson Soares",
      address: "Av. Djanira Estevis",
      number: 765,
      complement: "Casa 2",
      neighborhood: "Lindo Vale",
      city: "Rio Pomba",
      state: "Minas Gerais",
      zipCode: "35390-000",
      phone: "(31) 998178-1566"
    }
  ]);

  function handleVoltar() {
    nav.goBack();
  }

  return (
    <Container>
      <ComponentHeader
        buttonBack={true}
        displayLogo={false}
        titleText="Meu Endereços"
      />
      <Listing>
        <FlatList
          numColumns={1}
          scrollEnabled={true}
          keyExtractor={item => item.id}
          data={adresses}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                marginBottom: 10,
                padding: 5
              }}
            >
              <AdressListings>
                <MyAdress>
                  <MyAdressName>{item.name}</MyAdressName>
                  <MyAdressPublicPlace>
                    {item.address + ", " + item.number}
                  </MyAdressPublicPlace>
                  <MyAdressCity>
                    {item.neighborhood + " - " + item.city + " - " + item.state}
                  </MyAdressCity>
                  <MyAdressPostCard>{item.zipCode}</MyAdressPostCard>
                  <MyAdressPhone>{item.phone}</MyAdressPhone>
                </MyAdress>
                <MyAdressDetail>
                  <Icon
                    name="chevron-forward"
                    style={{
                      fontSize: 30,
                      color: "#9728AD"
                    }}
                  />
                </MyAdressDetail>
              </AdressListings>
            </TouchableOpacity>
          )}
        ></FlatList>
      </Listing>
      <ButtonContainer>
        <ComponentButton children="Adicionar" />
      </ButtonContainer>
    </Container>
  );
}

export default Adresses;

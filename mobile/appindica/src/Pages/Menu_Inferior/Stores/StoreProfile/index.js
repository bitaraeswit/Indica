import React, {useState, useEffect} from "react";
import {ScrollView, RefreshControl} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

import ComponentHeader from "../../../../Components/Header";
import ComponentInputField from "../../../../Components/InputField";
import ComponentFilter from "../../../../Components/Filter";
import ComponentListingProduct from "../../../../Components/ListingProduct";

import api from "../../../../services/api";

import {
  Container,
  Header,
  HeaderLike,
  Followers,
  Locality,
  County,
  City,
  State,
  DeliveryInformation,
  InputFieldContainer
} from "./styles";

function StoreProfile() {

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [information, setInformation] = useState([]);
  const [releases, setReleases] = useState([]);

  // carrega as lojas
  const getStoresInformation = async () => {
    setLoading(true);
    console.log("-------------");
    let res = await api.get(`/endereco-loja?id=${1}`, {
      headers: {
          'Authorization': 'deeb02f95a10cdfac69de085111cc990'
      }
    });
    if(res !== ''){
      setInformation(res.data.rows);
    } else {
      alert('Erro:'+res.error);
    }
    setLoading(false);
  }

  // carrega os produtos
  const getReleases = async () => {
    setLoading(true);
    let res = await api.get('/produto', {
      headers: {
          'Authorization': 'deeb02f95a10cdfac69de085111cc990'
      }
    });
    if(res !== ''){
      setReleases(res.data.rows);
      console.log(releases);
    } else {
      alert('Erro:'+res.error);
    }
    setLoading(false);
  }

  // carrega a página quando segura e arrasta para baixo
  const onRefresh = () => {
    setRefreshing(false);
    getStoresInformation();
    getReleases();
  }

  // chama o método que carrega o perfil sempre que a página perfil de lojas é carregada
  useEffect(() => {
    getStoresInformation();
    getReleases();
  },[]); 

  return (
    <Container>
      <ComponentHeader
        buttonBack={true}
        displayLogo={false}
        titleText="Top Store"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header>
          <HeaderLike>
            <Icon name="heart" size={20} style={{ color: "#9728AD" }} />
            <Followers>15 seguidores</Followers>
          </HeaderLike>
          <Locality>
            <Ionicons
              name="ios-location"
              size={20}
              style={{ color: "#9728AD" }}
            />
            <County>
              <City>Viçosa -</City>
              <State> MG</State>
            </County>
          </Locality>
          <DeliveryInformation>Entrega somente em Viçosa</DeliveryInformation>
        </Header>
        <InputFieldContainer>
          <ComponentInputField textInput="Busque seu item favorito" />
        </InputFieldContainer>
        <ComponentFilter />
        <ComponentListingProduct />
      </ScrollView>
    </Container>
  );
}

export default StoreProfile;

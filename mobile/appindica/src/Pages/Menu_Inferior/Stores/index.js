import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity, View,ScrollView, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ComponentHeader from "../../../Components/Header";
import InputField from "../../../Components/InputField";

import Star from '../../../assets/icons/star.svg';

import api from "../../../services/api";

import {
  Container,
  InputFieldContainer,
  Listing,
  ListingStores,
  ListingStoresProfile,
  StoreImg,
  ListingStoresProfileInformation,
  ListingStoresProfileInformationTitle,
  ListingStoresProfileInformationCategory,
  Evaluation,
  EvaluationNumber,
  Point, 
  Category,
  ListingStoresProfileDelivery,
  Delivery,
  DeliveryPrice,
  DeliveryPriceFree,
  LoadingIcon
} from "./styles";

function Stores() {
  const nav = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [store, setStore] = useState([]);

  function handleStoreProfile() {
    nav.navigate("StoreProfile");
  }

  // Se a entrega for grátis, a cor passa a ser roxa
  function deliveryOptions(item){
    if (item === "Grátis"){
      return <DeliveryPriceFree>{item}</DeliveryPriceFree>
    } else {
      return <DeliveryPrice>{"R$ " +item}</DeliveryPrice>
    }
  }

  // carrega as lojas
  const getStores = async () => {
    setLoading(true);
    let res = await api.get('/loja', {
      headers: {
          'Authorization': 'deeb02f95a10cdfac69de085111cc990'
      }
    });
    if(res !== ''){
      setStore(res.data.rows);
    } else {
      alert('Erro:'+res.error);
    }
    setLoading(false);
  }

  // carrega a página quando segura e arrasta para baixo
  const onRefresh = () => {
    setRefreshing(false);
    getStores();
  }

  // chama o método que carrega as lojas sempre que a página lojas é carregada
  useEffect(() => {
    getStores();
  },[]);

  return (
    <Container>
      <ComponentHeader 
        buttonBack={false}
        displayLogo={false}
        titleText="Lojas"
      />
      <InputFieldContainer>
        <InputField textInput="Busque pela loja" />
      </InputFieldContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Listing>
          {
            loading && 
            <LoadingIcon size="large" color="#9728AD" />
          }
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={1}
            scrollEnabled={true}
            keyExtractor={item => item.id}
            data={store}
            onEndReachedThreshold={0.1} 
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  paddingHorizontal: 20
                }}
              >
                <ListingStores onPress={handleStoreProfile}>
                  <ListingStoresProfile>
                    <StoreImg source={{uri: item.logomarca}} />
                    <ListingStoresProfileInformation>
                      <ListingStoresProfileInformationTitle numberOfLines={1}>
                         {item.nome_fantasia}
                       </ListingStoresProfileInformationTitle>
                       <ListingStoresProfileInformationCategory>
                         <Evaluation>
                          <Star  width="19" height="19" fill="#FF9200"/>
                          <EvaluationNumber>{4.5}</EvaluationNumber>
                        </Evaluation>
                        <Point />
                        <Category>{item.cpf_cnpj}</Category>
                       </ListingStoresProfileInformationCategory>
                       <ListingStoresProfileDelivery>
                        <Delivery>Entrega</Delivery>
                        <Point />
                        <View>{deliveryOptions("Grátis")}</View>
                      </ListingStoresProfileDelivery>
                    </ListingStoresProfileInformation>
                   </ListingStoresProfile>
                </ListingStores> 
              </TouchableOpacity>
            )}
          ></FlatList>
        </Listing>
      </ScrollView>
    </Container>
  );
}

export default Stores;

import React, { useState, useEffect } from "react";
import {
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  Dimensions, 
  RefreshControl
} from "react-native";
var { height, width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import Swiper from 'react-native-swiper';

import {
  Container,
  Logo,
  Header,
  MainMenu,
  InputFieldContainer,
  MainMenuButton,
  MainMenuButtonText,
  Caption,
  CaptionText,
  Products,
  ProductsImg,
  ProductsDescription,
  ProductsDescriptionTitle,
  ProductsDescriptionPrice,
  ProductsDescriptionPriceDiscount,
  ProductsDescriptionPriceRegular,
  SwiperContainer,
  SwiperDot,
  SwiperDotActive,
  SwiperItem,
  SwiperImage,
  LoadingIcon
} from "./styles";

import LogoImg from "../../assets/imagens/logo.svg";

import ComponentInputField from "../../Components/InputField";

import api from "../../services/api";

function Home() {  
  const nav = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [releases, setReleases] = useState([]);
  const [banners, setBanners]  = useState([]); 

  function handleFiltrosCategoriaMasculino() {
    nav.navigate("CategoryFilters", { id: 2 });
  }

  function handleFiltrosCategoriaFeminino() {
    nav.navigate("CategoryFilters", { id: 1 });
  }

  function handleFiltrosCategoriaInfantil() {
    nav.navigate("CategoryFilters", { id: 3 });
  }

  function handleExibeProduto() {
    Alert.alert("Exibirá a página com o produto!");
  }

  // carrega os banners
  const getBanners = async () => {
    setLoading(true);
    let res = await api.get('/banner', {
      headers: {
        'Authorization': 'deeb02f95a10cdfac69de085111cc990'
      }
    });
    if(res !== ''){
      setBanners(res.data.rows);
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
    } else {
      alert('Erro:'+res.error);
    }
    setLoading(false);
  }

  // chama o método que carrega os banners e os produtos sempre que a página home é carregada
  useEffect(() => {
    getBanners();
    getReleases();
  },[]);

  // carrega a página quando segura e arrasta para baixo
  const onRefresh = () => {
    setRefreshing(false);
    getBanners();
    getReleases();
  }

  return (
    <Container>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header>
          <Logo>
            <LogoImg />
          </Logo>
        </Header>
        <MainMenu>
          <MainMenuButton onPress={handleFiltrosCategoriaFeminino}>
            <MainMenuButtonText>Feminino</MainMenuButtonText>
          </MainMenuButton>
          <MainMenuButton onPress={handleFiltrosCategoriaMasculino}>
            <MainMenuButtonText>Masculino</MainMenuButtonText>
          </MainMenuButton>
          <MainMenuButton onPress={handleFiltrosCategoriaInfantil}>
            <MainMenuButtonText>Infantil</MainMenuButtonText>
          </MainMenuButton>
        </MainMenu>
        <InputFieldContainer>
          <ComponentInputField textInput="Busque seu item favorito" />
        </InputFieldContainer>
        <Caption>
          <CaptionText>Recomendados</CaptionText> 
          <SwiperContainer>
            <Swiper
              style={{height: 130}}
              dot={<SwiperDot />}
              activeDot={<SwiperDotActive />}
              paginationStyle={{top:null, right:null, bottom: -20, left: null}}
              autoplay={true}
              showsPagination={false}
            >
              {
                banners.map(item => (
                  <SwiperItem key={item.id}>
                    <SwiperImage source={{uri: item.imagem}} resizeMode="cover"/>
                  </SwiperItem>
                ))
              }
            </Swiper>
          </SwiperContainer>
        </Caption>

        <CaptionText>Lançamentos</CaptionText>
        <Products>
          {
            loading && 
            <LoadingIcon size="large" color="#9728AD" />
          }
          <FlatList
            numColumns={2}
            scrollEnabled={true}
            keyExtractor={item => item.id}
            data={releases}
            onEndReachedThreshold={0.1}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={handleExibeProduto}
                style={{
                  width: width / 2,
                  marginBottom: 10,
                  padding: 5
                }}
              >
                <ProductsImg
                  source={{uri: item.imagem}}
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                />
                <ProductsDescription>
                  <ProductsDescriptionTitle numberOfLines={1}>
                    {item.nome + " - " + item.size}
                  </ProductsDescriptionTitle>
                  <ProductsDescriptionPrice>
                    <ProductsDescriptionPriceDiscount>
                      {"R$ " + item.valor_promocional}
                      {` `} - {` `}
                    </ProductsDescriptionPriceDiscount>
                    <ProductsDescriptionPriceRegular>
                      {"R$ " + item.valor}
                    </ProductsDescriptionPriceRegular>
                  </ProductsDescriptionPrice>
                </ProductsDescription>
              </TouchableOpacity>
            )}
          ></FlatList>
        </Products>
      </ScrollView>
    </Container>
  );
}

export default Home;

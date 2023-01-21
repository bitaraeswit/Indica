import React, { useState } from "react";
import { FlatList, TouchableOpacity, Dimensions, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import ComponentHeader from "../../../../Components/Header";
import ComponentInputField from "../../../../Components/InputField";

var { height, width } = Dimensions.get("window");

import {
  Container,
  InputFieldContainer,
  Listing,
  MyFavorites,
  MyFavoritesImg,
  MyFavoritesDescription,
  MyFavoritesDescriptionTitle,
  MyFavoritesPrice,
  MyFavoritesPriceDiscount,
  MyFavoritesPriceRegular,
  Buttons,
  BuyButton,
  BuyButtonText,
  DeleteButton
} from "./styles";

function Favorites() {
  const [favoritos, setFavoritos] = useState([
    {
      id: "1",
      image: require("../../../../assets/imagens/lancamento1.jpeg"),
      description: "Moleton to da moda super grande",
      size: "M",
      regularPrice: "109,99",
      discountPrice: "79,99"
    },
    {
      image: require("../../../../assets/imagens/lancamento2.jpeg"),
      id: "2",
      description: "Moleton to da moda",
      size: "M",
      regularPrice: "109,99",
      discountPrice: "79,99"
    },
    {
      image: require("../../../../assets/imagens/lancamento3.jpeg"),
      id: "3",
      description: "Moleton to da moda",
      size: "M",
      regularPrice: "109,99",
      discountPrice: "79,99"
    }
  ]);

  function displayProduct() {
    Alert.alert("Exibirá o produto");
  }

  function purchaseProduct() {
    Alert.alert("Realizar a compra do produto");
  }

  function deleteProduct() {
    Alert.alert("Excluirá o produto");
  }

  return (
    <Container>
      <ComponentHeader
        buttonBack={true}
        displayLogo={false}
        titleText="Favoritos"
      />
      <InputFieldContainer>
        <ComponentInputField textInput="Busque pelo item" />
      </InputFieldContainer>
      <Listing>
        <MyFavorites>
          <FlatList
            numColumns={2}
            scrollEnabled={true}
            keyExtractor={item => item.id}
            data={favoritos}
            onEndReachedThreshold={0.1}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={displayProduct}
                style={{
                  width: width / 2,
                  marginBottom: 10,
                  padding: 5
                }}
              >
                <MyFavoritesImg source={item.image} />
                <MyFavoritesDescription>
                  <MyFavoritesDescriptionTitle numberOfLines={1}>
                    {item.description + " - " + item.size}
                  </MyFavoritesDescriptionTitle>
                  <MyFavoritesPrice>
                    <MyFavoritesPriceDiscount>
                      {"R$ " + item.discountPrice}
                      {` `} - {` `}
                    </MyFavoritesPriceDiscount>
                    <MyFavoritesPriceRegular>
                      {"R$ " + item.regularPrice}
                    </MyFavoritesPriceRegular>
                  </MyFavoritesPrice>
                </MyFavoritesDescription>
                <Buttons>
                  <BuyButton onPress={purchaseProduct}>
                    <BuyButtonText>Comprar</BuyButtonText>
                  </BuyButton>
                  <DeleteButton onPress={deleteProduct}>
                    <Icon name="delete-forever" size={25} color="#025fa6" />
                  </DeleteButton>
                </Buttons>
              </TouchableOpacity>
            )}
          ></FlatList>
        </MyFavorites>
      </Listing>
    </Container>
  );
}

export default Favorites;

import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const InputFieldContainer = styled.View`
  padding: 0 20px;
`;

export const Listing = styled.View``;

export const MyFavorites = styled.View``;

export const MyFavoritesImg = styled.Image`
  height: 200px;
  width: 100%;
  border-radius: 8px;
`;

export const MyFavoritesDescription = styled.View`
  width: 100%;
  padding: 0 8px;
  align-items: center;
`;

export const MyFavoritesDescriptionTitle = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const MyFavoritesPrice = styled.View`
  flex-direction: row;
`;
export const MyFavoritesPriceDiscount = styled.Text`
  color: #9728ad;
  font-size: 14px;
  font-family: "Nunito-Regular";
`;

export const MyFavoritesPriceRegular = styled.Text`
  color: #696969;
  text-decoration: line-through;
  font-size: 14px;
  font-family: "Nunito-Regular";
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 0 8px;
  margin-top: 5px;
`;

export const BuyButton = styled.TouchableOpacity`
  background-color: #9728ad;
  border-radius: 5px;
  padding: 0 5px;
  height: 25px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const BuyButtonText = styled.Text`
  font-size: 13px;
  font-family: "Poppins-Bold";
  color: #ffffff;
`;

export const DeleteButton = styled.TouchableOpacity``;

import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const Logo = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  margin-top: 25;
  border-bottom-width: 0.5px;
  border-bottom-color: #DBDBDB;
  padding: 0 18px;
`;

export const MainMenu = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 15px;
`;

export const MainMenuButton = styled.TouchableOpacity``;

export const InputFieldContainer = styled.View`
  padding: 0 20px;
`;

export const MainMenuButtonText = styled.Text`
  font-size: 18px;
  font-family: "Poppins-Medium";
  color: #484848;
  padding: 0 20px;
`;

export const Caption = styled.View``;

export const CaptionText = styled.Text`
  font-size: 18px;
  font-family: "Poppins-Medium";
  color: #484848;
  padding: 0 0 0 18px;
  margin-bottom: 10px;
`;

export const Products = styled.View``;

export const ProductsImg = styled.Image`
  height: 200px;
  width: 100%;
  border-radius: 8px;
`;

export const ProductsDescription = styled.View`
  width: 100%;
  padding: 0 8px;
  align-items: center;
`;

export const ProductsDescriptionTitle = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const ProductsDescriptionPrice = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Bold";
  color: #696969;
`;

export const ProductsDescriptionPriceDiscount = styled.Text`
  color: #9728ad;
`;

export const ProductsDescriptionPriceRegular = styled.Text`
  color: #696969;
  text-decoration: line-through;
`;

export const SwiperContainer = styled.View`
  margin-bottom: 10px;
`;

export const SwiperDot = styled.View`
  width: 7px;
  height: 7px;
  background-color: rgba(151, 40, 173, 0.15);;
  border-radius: 5px;
  margin: 3px;
`;

export const SwiperDotActive = styled.View`
  width: 7px;
  height: 7px;
  background-color: #9728AD;
  border-radius: 5px;
  margin: 3px;
`;

export const SwiperItem = styled.View`
  flex: 1;
  background-color: #fefefe;
  padding: 0 20px;
`;

export const SwiperImage = styled.Image`
  width: 100%;
  height: 130px;
  border-radius: 10px;
  background-color: #DBDBDB;
`;

export const LoadingIcon = styled.ActivityIndicator``;
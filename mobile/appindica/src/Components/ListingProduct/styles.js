import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const Product = styled.View`
  background-color: #fefefe;
`;

export const ProductImg = styled.Image`
  height: 200px;
  width: 100%;
  border-radius: 8px;
`;

export const ProductDescription = styled.View`
  width: 100%;
  padding: 0 8px;
  align-items: center;
`;

export const ProductDescriptionTitle = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Bold";
`;

export const ProductPriceDiscount = styled.Text`
  color: #9728ad;
`;

export const ProductPriceRegular = styled.Text`
  color: #696969;
  text-decoration: line-through;
`;

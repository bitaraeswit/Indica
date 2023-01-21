import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const Listing = styled.View`
  padding: 0 10px;
`;

export const ProductListing = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ProductListingImg = styled.Image`
  width: 25%;
  height: 110px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  flex: 1;
`;

export const ProductInformation = styled.View`
  width: 70%;
`;

export const ProductInformationName = styled.Text`
  font-size: 15px;
  font-family: "Poppins-Medium";
  color: #484848;
`;

export const ProductInformationSize = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const Description = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DescriptionAmount = styled.View`
  flex: 1;
`;

export const DescriptionPrice = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Bold";
  color: #9728ad;
`;

export const HorizontalLine = styled.View`
  border-bottom-width: 0.75px;
  border-bottom-color: #DBDBDB;
`;

export const CheckoutContainer = styled.View`
  width: 100%;
  height: 150px;
  background-color: rgba(151, 40, 173, 0.15);
  bottom: 0;
  margin-bottom: 20px;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const Checkout = styled.View`
  padding: 10px 20px 0 20px;
`;

export const CheckoutAmount = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CheckoutAmountText = styled.Text`
  font-size: 15px;
  font-family: "Poppins-Medium";
  color: #484848;
`;

export const CheckoutAmountValue = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Bold";
  color: #9728ad;
`;

export const CheckoutTotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CheckoutTotalText = styled.Text`
  font-size: 15px;
  font-family: "Poppins-Medium";
  color: #484848;
`;

export const CheckoutTotalValue = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Bold";
  color: #9728ad;
`;

export const ContainerButton = styled.View`
  padding: 0 40px;
`;

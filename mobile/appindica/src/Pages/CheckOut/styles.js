import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const DeliveryAddress = styled.View`
  padding: 0 10px;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: "Poppins-Medium";
  color: #484848;
`;

export const Value = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Bold";
  color: #9728ad;
`;

export const ButtonContainer = styled.View`
  padding: 0 30px;
`;

export const DeliveryAddressCaption = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const HorizontalLine = styled.View`
  border-bottom-width: 0.75px;
  border-bottom-color: #DBDBDB;
  margin: 10px 0 10px 0;
`;

export const DeliveryContainer = styled.View`
  padding: 0 10px;
`;

export const DeliveryAddressDetail = styled.View``;

export const DeliveryInformation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OptionsCaption = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const FormPayment = styled.View`
  padding: 0 10px;
`;

export const DiscountContainer = styled.View`
  padding: 0 10px;
`;

export const Discount = styled.View`
  padding: 0 60px;
`;

export const InputContainer = styled.View`
  height: 50px;
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputText = styled.TextInput`
  flex: 1;
  font-size: 14px;
  font-family: "Nunito-Regular";
  margin-bottom: 0px;
`;

export const PurchaseSummaryContainer = styled.View`
  padding: 0 10px;
`;

export const PurchaseSummary = styled.View`
  background-color: rgba(151, 40, 173, 0.15);
  padding: 5px;
`;

export const PurchaseSummaryItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonContainerPurchase = styled.View`
  padding: 0 40px;
`;
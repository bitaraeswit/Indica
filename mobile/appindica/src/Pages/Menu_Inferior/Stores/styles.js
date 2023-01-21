import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const InputFieldContainer = styled.View`
  padding: 0 20px;
`;

export const Listing = styled.View`
  background-color: #fefefe;
  padding-top: 10px;
`;

 export const ListingStores = styled.TouchableOpacity`
   width: 100%;
   height: 95px;
   flex-direction: row;
   align-items: center;
   background-color: #FFFFFF;
   margin-bottom: 10px;
   border-radius: 10px;
   border-width: 0.5;
   border-color: #DBDBDB;
 `;

 export const ListingStoresProfile = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 20px;
 `;

 export const StoreImg = styled.Image`
   width: 60px;
   height: 60px;
   border-radius: 60px;
   background-color: #DBDBDB;
 `;

 export const ListingStoresProfileInformation = styled.View` 
  padding: 5px 10px 5px 10px;
  justify-content: space-between;
 `;

 export const ListingStoresProfileInformationTitle = styled.Text`
  color: #484848;
  font-size: 15px;
  font-family: "Poppins-Medium";
  max-width: 250px;
 `;

export const ListingStoresProfileInformationCategory = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Evaluation = styled.View`
  flex-direction: row;
`;

export const EvaluationNumber = styled.Text`
  font-size: 13px;
  font-family: "Nunito-Regular";
  color: #696969;
  margin-left: 2px;
`;

export const Point = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: #b7b7b7;
  margin: 0 5px 0 5px;
`;

export const Category = styled.Text`
  font-size: 13px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const ListingStoresProfileDelivery = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Delivery = styled.Text`
  font-size: 13px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const DeliveryPrice = styled.Text`
  font-size: 13px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const DeliveryPriceFree = styled.Text`
  font-size: 13px;
  font-family: "Nunito-Regular";
  color: #9728ad;
`;

export const LoadingIcon = styled.ActivityIndicator``;
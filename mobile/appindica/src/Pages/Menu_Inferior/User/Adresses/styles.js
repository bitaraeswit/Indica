import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const Listing = styled.View`
  padding: 0 20px;
`;

export const AdressListings = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MyAdress = styled.View`
  flex: 1;
  border-bottom-width: 0.5px;
  border-color: #025fa6;
`;

export const MyAdressName = styled.Text`
  font-size: 15px;
  font-family: "Poppins-Medium";
  font-weight: bold;
  color: #484848;
`;

export const MyAdressPublicPlace = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const MyAdressCity = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const MyAdressPostCard = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const MyAdressPhone = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
  padding-bottom: 10px;
`;

export const MyAdressDetail = styled.View``;

export const ButtonContainer = styled.View`
  padding: 0 40px;
`;

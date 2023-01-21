import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const Header = styled.View`
  padding: 0 30px;
  background-color: #fefefe;
  border-bottom-width: 0.75px;
  border-bottom-color: #DBDBDB;
  padding-bottom: 10px;
  margin-top: 10px;
`;

export const HeaderLike = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Followers = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const Locality = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
`;

export const County = styled.View`
  flex-direction: row;
  margin-left: 5px;
`;

export const City = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const State = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const DeliveryInformation = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
  margin-top: 15px;
`;

export const InputFieldContainer = styled.View`
  padding: 0 20px;
  background-color: #fefefe;
`;

export const LoadingIcon = styled.ActivityIndicator``;
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const Header = styled.Text`
  margin-top: 10px;
  padding: 0 10px;
  font-size: 15px;
  font-family: "Poppins-Medium";
  color: #484848;
  margin-bottom: 5px;
`;

export const Listing = styled.View`
  padding: 0 20px;
`;

export const DescriptionListing = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom-width: 0.75px;
  border-bottom-color: #DBDBDB;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
  margin-top: 10px;
`;

export const LastListing = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const Listing = styled.View``;

export const ProfileListing = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const ProfileListingInformation = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ProfileContainer = styled.View`
  margin-top: 10px;
`;

export const ProfileImg = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: "Poppins-Medium";
  color: #484848;
`;

export const Caption = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular"; 
  color: #696969;
  margin-top: -2px;
`;

export const ProfileDescription = styled.View`
  margin-left: 10px;
`;

export const NextButton = styled.View``;

export const ListingBody = styled.View`
  padding: 0 20px;
`;

export const LeadingEdge = styled.View`
  border-bottom-width: 0.5px;
  border-color: #DBDBDB;
  margin-top: 10px;
`;

export const ListingBodyItens = styled.TouchableOpacity`
  padding: 5px 0 5px 0;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 0.75px;
  border-color: #DBDBDB;
`;

export const ListingBodyInformation = styled.View``;

export const ListingBodyExit = styled.TouchableOpacity`
  padding: 5px 0 5px 0;
`;

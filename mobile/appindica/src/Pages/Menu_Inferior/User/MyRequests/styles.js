import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const Listing = styled.View`
  padding: 10px 10px 0 10px;
  background-color: #fefefe;
`;

export const ListingRequests = styled.TouchableOpacity``;

export const MyRequests = styled.View`
  background-color: #fefefe;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 1px;
  border-radius: 10px;
  elevation: 1;
`;

export const DataRequests = styled.View` 
  padding: 20px 0 0px 25px;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  font-size: 15px;
  font-family: "Poppins-Medium";
  color: #484848;
`;

export const IconSphere = styled.Text`
  padding: 50px 0 0 0; 
`;

export const NumberRequests = styled.Text`
  font-size: 15px;
  font-family: "Poppins-Medium";
  color: #484848;
`;

export const DateValue = styled.Text`
  padding: 10px 0;
`;

export const Value = styled.Text`
`;

export const Data = styled.Text`
`;

export const DataText = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const ValueText = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const Status = styled.View``;

export const StatusText = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Bold";
  color: #025fa6;
`;

export const InformationRequests = styled.View`
  flex-direction: row;
`;

export const DetailRequests = styled.View`
  height: 40px; 
`;

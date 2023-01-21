import styled from "styled-components/native";
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const InputFieldContainer = styled.View`
  padding: 0 20px;
`;

export const SelectCity = styled.View`
  padding: 0 20px;
`;

export const CityContainer = styled.TouchableOpacity`
  padding: 15px 0;
  border-bottom-width: 0.5px;
  border-bottom-color: #DBDBDB;
`;

export const Title = styled.Text`
  font-size: 19px;
  font-family: "Poppins-Bold";
  color: #484848;
  text-align: center;
  margin: 20px 0;
`;

export const MainTitle = styled.Text`
  font-size: 19px;
  font-family: "Poppins-Medium";
  color: #484848;
  margin: 20px 0;
`;

export const CityText = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const StateText = styled.Text`
  font-size: 18px;
  font-family: "Poppins-Medium";
  color: #484848;
  border-bottom-width: 0.5px;
  border-bottom-color: #DBDBDB;
  margin-top: 15px;
`;

export const ContainerInformation = styled.View`
  margin-top: 20px;
`;

export const LocationContainer = styled.View`
  padding: 0 20px;
  margin-top: 20px;
`;

export const Location = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-width: 1px;
  border-color: #9728ad;
  border-radius: 20px;
`;

export const FirstColumn = styled.View``;

export const TitleText = styled.Text`
  font-size: 16px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const LocationText = styled.Text`
  font-size: 20px;
  font-family: "Poppins-Medium";
  color: #484848;
`;

export const SecondColumn = styled.View``;

export const ButtonClose = styled.TouchableOpacity``;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between
`;
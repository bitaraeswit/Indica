import styled from "styled-components/native";
import FeatherIcon from "react-native-vector-icons/Feather";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 45px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFF;
  padding: 0 20px;
  margin: 15px 0 15px 0;
  border-width: 0.5px;
  border-color: #DBDBDB;
`;

export const Icon = styled(FeatherIcon)`
  font-size: 20px;
  color: #9728AD;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'Nunito-Regular';
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  margin-left: 5px;
`;

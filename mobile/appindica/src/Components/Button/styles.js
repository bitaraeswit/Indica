import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 45px;
  background: #9728ad;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-family: "Poppins-Bold";
  color: #FFF;
`;
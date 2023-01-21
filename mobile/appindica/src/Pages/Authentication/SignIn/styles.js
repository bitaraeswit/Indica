import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: #FAFAFA;
  align-items: center;
  justify-content: center;
  padding: 0 30px 15px 30px;
`;

export const QuickAccess = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const QuickAccessFacebook = styled.TouchableOpacity`
  width: 50%;
  align-items: flex-end;
  padding-right: 5px;
`;

export const QuickAccessGoogle = styled.TouchableOpacity`
  width: 50%;
  padding-left: 5px;
`;

export const InputArea = styled.View`
  width: 100%;
  align-items: center;
`;

export const CreateAccountButton = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const CreateAccountText = styled.Text`
  color: #696969;
  font-size: 14px;
  font-family: "Poppins-Medium";
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  font-family: 'Poppins-Bold';
  color: #9728ad;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const CreateAccountTextButton = styled.TouchableOpacity``;

export const CreateAccountTextButtonBold = styled.Text`
  font-size: 14px;
  font-family: "Poppins-Bold";
  color: #9728ad;
  margin-left: 5px;
`;
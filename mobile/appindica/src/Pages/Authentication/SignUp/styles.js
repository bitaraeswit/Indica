import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FAFAFA;
  justify-content: center;
  align-items: center;
  padding: 0 30px 15px 30px;
`;


export const InputArea = styled.View`
  width: 100%;
  height: 35%;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const ImportantInformation = styled.View`
  width: 100%;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const ImportantInformationText = styled.Text`
  color: #696969;
  font-size: 14px;
  font-family: "Poppins-Medium";
  text-align: center;
`;
export const ImportantInformationTextBold = styled.Text`
  font-size: 14px;
  font-family: "Poppins-Bold";
  color: #9728ad;
`;

export const ServiceTerms = styled.View`
  width: 100%;
`;

export const CheckBoxText = styled.Text`
  font-size: 14px;
  font-family: "Poppins-Bold";
  color: #9728ad;
  text-align: center;
`;
import styled from "styled-components/native";

export const Container = styled.SafeAreaView``;

export const ContainerHeader = styled.View`
  background-color: #FAFAFA;
  height: 68px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.5px;
  border-color: #DBDBDB;
  padding: 0 10px;
  elevation: 2px;
`;

export const HeaderCenterLogo = styled.View`
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 19px;
  font-family: "Poppins-Bold";
  color: #484848;
  width: 100%;
`;

export const HeaderCenter = styled.View`
  width: 60%;
  align-items: center;
  justify-content: center;
`;

export const HeaderLeft = styled.View`
  width: 20%;
`;

export const HeaderLeftSize = styled.View`
  width: 30px;
  align-items: center;
`;

export const HeaderRight = styled.View`
  width: 20%;
  height: 50px;
`;

import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const Lists = styled.View``;

export const Notification = styled.View`
  padding-right: 20px;
  border-bottom-width: 0.5px;
  border-bottom-color: #025fa6;
  margin-top: 10px;
  justify-content: center;
`;

export const Title = styled.Text`
  padding: 0 20px;
  font-size: 15px;
  font-family: "Poppins-Medium";
  color: #484848;
`;

export const Selection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  padding: 0 20px;
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const PersonalData = styled.TouchableOpacity`
  padding-right: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.5;
  border-bottom-color: #025fa6;
`;

export const Information = styled.View`
  margin-top: 10px;
`;

export const ChangePassword = styled.TouchableOpacity`
  padding-right: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

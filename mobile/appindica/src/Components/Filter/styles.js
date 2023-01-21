import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fefefe;
  margin-bottom: 8px;
`;

export const Category = styled.View`
  flex-direction: row;
`;

export const CategoryButton = styled.TouchableOpacity`
  flex-direction: row;
  border-width: 0.5px;
  border-color: #9728ad;
  border-radius: 10px;
  padding: 5px 7px;
  margin: 0 3px;
  background-color: rgba(151, 40, 173, 0.15);
  align-items: center;
  justify-content: center;
`;

export const CategoryButtonText = styled.Text`
  font-size: 12px;
  font-family: "Poppins-Medium";
  color: #696969;
`;

export const CategoryButtonClean = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const CategoryButtonCleanText = styled.Text`
  font-size: 12px;
  font-family: "Poppins-Medium";
  color: #025fa6;
`;

export const Selection = styled.View``;

export const ContainerModal = styled.View`
  background-color: #fefefe;
  padding: 20px 20px;
  border-radius: 20px;
`;

export const TitleModal = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const TitleModalText = styled.Text`
  font-size: 16px;
  font-family: "Poppins-Bold";
  color: #696969;
`;

export const Filters = styled.View`
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Select = styled.Text`
  margin: 7px;
`;

export const Options = styled.View``;

export const OptionsButton = styled.TouchableHighlight`
  padding: 5px 10px;
  border-width: 0.75;
  border-color: #DBDBDB;
  border-radius: 10;
`;

export const OptionsButtonText = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const ToApplyButton = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #9728ad;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #fefefe;
  font-size: 15px;
  font-family: "Poppins-Medium";
`;

export const ButtonClose = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #025fa6;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FAFAFA;
`;

export const Form = styled.View``;

export const Input = styled.View`
  height: 60px;
  width: 90%;
  align-self: center;
  align-items: center;
  margin-top: 10;
  padding: 0 0 0 16px;
  flex-direction: row;
  border-width: 0.5px;
  border-color: #DBDBDB;
  border-radius: 5px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: "Nunito-SemiBold";
  color: rgba(0, 0, 0, 0.4);
`;

export const County = styled.View`
  flex-direction: row;
  padding: 0 20px;
`;

export const State = styled.View`
  height: 50px;
  width: 30%;
  align-self: center;
  align-items: center;
  margin-top: 10;
  padding: 0 0 0 16px;
  flex-direction: row;
  border-width: 0.5px;
  border-color: #DBDBDB;
  border-radius: 5px;
  margin-right: 2%;
`;

export const City = styled.View`
  height: 50px;
  width: 68%;
  align-self: center;
  align-items: center;
  margin-top: 10;
  padding: 0 0 0 16px;
  flex-direction: row;
  border-width: 0.5px;
  border-color: #DBDBDB;
  border-radius: 5px;
  margin-right: 2%;
`;

export const Phone = styled.View`
  flex-direction: row;
  padding: 0 20px;
`;

export const PhonePrefix = styled.View`
  height: 50px;
  width: 20%;
  align-self: center;
  align-items: center;
  margin-top: 10;
  padding: 0 0 0 16px;
  flex-direction: row;
  border-width: 0.5px;
  border-color: #DBDBDB;
  border-radius: 5px;
  margin-right: 2%;
`;

export const PhoneNumber = styled.View`
  height: 50px;
  width: 78%;
  align-self: center;
  align-items: center;
  margin-top: 10;
  padding: 0 0 0 16px;
  flex-direction: row;
  border-width: 0.5px;
  border-color: #DBDBDB;
  border-radius: 5px;
`;

export const ButtonContainer = styled.View`
  padding: 0 20px;
  margin-top: 15px;
`;
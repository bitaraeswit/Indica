import React, { useState } from "react";
import { Switch } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import ComponentHeader from "../../../../Components/Header";

import {
  Container,
  Lists,
  Notification,
  Title,
  Selection,
  Description,
  Information,
  PersonalData,
  ChangePassword
} from "./styles";

function Settings() {
  const nav = useNavigation();
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function handleChangePassword() {
    nav.navigate("ChangePassword");
  }

  function handlePersonalData() {
    nav.navigate("PersonalData");
  }

  return (
    <Container>
      <ComponentHeader
        buttonBack={true}
        displayLogo={false}
        titleText="Configuração"
      />
      <Lists>
        <Notification>
          <Title>Notificações</Title>
          <Selection>
            <Description>Deseja receber notificações?</Description>
            <Switch
              trackColor={{ false: "#81b0ff", true: "#cf7be0" }}
              thumbColor={isEnabled ? "#9728ad" : "#025fa6"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </Selection>
        </Notification>
        <PersonalData onPress={handlePersonalData}>
          <Information>
            <Title>Dados pessoais</Title>
            <Description>Altere seus dados pessoais</Description>
          </Information>
          <Icon
            name="chevron-forward"
            style={{
              fontSize: 30,
              color: "#9728AD"
            }}
          />
        </PersonalData>
        <ChangePassword onPress={handleChangePassword}>
          <Information>
            <Title>Alterar senha</Title>
            <Description>Altera a sua senha</Description>
          </Information>
          <Icon
            name="chevron-forward"
            style={{
              fontSize: 30,
              color: "#9728AD"
            }}
          />
        </ChangePassword>
      </Lists>
    </Container>
  );
}

export default Settings;

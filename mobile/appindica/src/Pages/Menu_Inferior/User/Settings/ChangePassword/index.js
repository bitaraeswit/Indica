import React from "react";

import ComponentHeader from "../../../../../Components/Header";
import ComponentButton from "../../../../../Components/Button";

import { 
  Container, 
  Form, Input, 
  InputText, 
  ButtonContainer 
} from "./styles";

function ChangePassword() {
  return (
    <Container>
      <ComponentHeader
        buttonBack={true}
        displayLogo={false}
        titleText="Alterar senha"
      />
      <Form>
        <Input>
          <InputText
            placeholder="Senha atual"
            placeholderTextColor="rgba(0, 0, 0, 0.4)"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
          ></InputText>
        </Input>
        <Input>
          <InputText
            placeholder="Nova senha"
            placeholderTextColor="rgba(0, 0, 0, 0.4)"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
          ></InputText>
        </Input>
        <Input>
          <InputText
            placeholder="Confirmar senha nova"
            placeholderTextColor="rgba(0, 0, 0, 0.4)"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
          ></InputText>
        </Input>
      </Form>
      <ButtonContainer>
        <ComponentButton children="Salvar" />
      </ButtonContainer>
    </Container>
  );
}

export default ChangePassword;

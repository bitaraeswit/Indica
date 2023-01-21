import React, {useState} from "react";
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import PersonIcon from '../../../assets/icons/account.svg';
import EmailIcon from '../../../assets/icons/email.svg';
import LockIcon from '../../../assets/icons/lock.svg';


import {
  Container,
  InputArea,
  ServiceTerms,
  ImportantInformation,
  ImportantInformationText,
  ImportantInformationTextBold,
  CheckBoxText
} from "./styles";

import Input from '../../../Components/Input';
import ComponentHeader from '../../../Components/Header';
import ComponentButton from '../../../Components/Button';

function SignUp() {
  const navigation = useNavigation();
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [passwordConfirmField, setPasswordConfirmField] = useState('');
  const [check, setCheck] = useState(false);

  function handleGoBack(){
    navigation.goBack("Login");
  }

  return (
    <KeyboardAvoidingView 
      style={{flex: 1, backgroundColor: "#fff"}}
      behavior={Platform.OS == 'ios' ? 'padding': undefined}
      enabled
    >
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flex: 1}}
    >
      <ComponentHeader
          buttonBack={true}
          displayLogo={false}
          titleText="Cadastre-se"
        />
      <Container>
        <InputArea>
            <Input
              IconSvg={PersonIcon}
              placeholder="Nome completo"
              value={nameField}
              onChangeText={t=>setNameField(t)}
            />
            <Input 
              IconSvg={EmailIcon}
              placeholder="Cadastre um e-mail"
              value={emailField}
              onChangeText={t=>setEmailField(t)}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Input 
              IconSvg={LockIcon}
              placeholder="Cadastre uma senha"
              value={passwordField}
              onChangeText={t=>setPasswordField(t)}
              password={true}
              autoCapitalize="none"
            />
            <Input 
              IconSvg={LockIcon}
              placeholder="Confirme a senha"
              value={passwordConfirmField}
              onChangeText={t=>setPasswordConfirmField(t)}
              password={true}
              autoCapitalize="none"
            />
            <ComponentButton onPress={handleGoBack}>Criar conta</ComponentButton>
            <ServiceTerms>
              <CheckBox
                title={<CheckBoxText>Aceito os termos de serviço</CheckBoxText>}
                containerStyle={{backgroundColor: "#FAFAFA", borderWidth: 0}}
                checked={check}
                onPress={() => setCheck(!check)}
              />
            </ServiceTerms>
            <ImportantInformation>
              <ImportantInformationText>
                Ao criar o cadastro você concorda com os{" "}
                <ImportantInformationTextBold>
                  termos de serviço
                </ImportantInformationTextBold>
              </ImportantInformationText>
            </ImportantInformation>
        </InputArea>        
      </Container>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUp;

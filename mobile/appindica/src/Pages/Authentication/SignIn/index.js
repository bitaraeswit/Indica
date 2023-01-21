import React, {useState} from "react";
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogoImg from '../../../assets/imagens/logo.svg';
import FacebookIcon from '../../../assets/icons/facebook.svg';
import GoogleIcon from '../../../assets/icons/google.svg';
import EmailIcon from '../../../assets/icons/email.svg';
import LockIcon from '../../../assets/icons/lock.svg';


import {
  Container,
  QuickAccess,
  QuickAccessFacebook,
  QuickAccessGoogle,
  CreateAccountButton,
  CreateAccountText,
  ForgotPassword, 
  ForgotPasswordText, 
  InputArea,
  CreateAccountTextButton,
  CreateAccountTextButtonBold
} from "./styles";

import ComponentInput from '../../../Components/Input';
import ComponentHeader from '../../../Components/Header';
import ComponentButton from '../../../Components/Button';

function SignIn() {
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  

  function handleCadastro(){
    navigation.navigate("SignUp");
  }

  return (
    
    <KeyboardAvoidingView 
      style={{flex: 1, backgroundColor:"#fff"}}
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
          titleText="Login"
      /> 
      <Container>

        <LogoImg />

        <QuickAccess>

          <QuickAccessFacebook>
            <FacebookIcon style={{width: "60px", height: "60px"}}/>
          </QuickAccessFacebook>

          <QuickAccessGoogle>
            <GoogleIcon style={{width: "60px", height: "60px"}}/>
          </QuickAccessGoogle>

        </QuickAccess>

        <InputArea>

          <ComponentInput 
            IconSvg={EmailIcon}
            placeholder="Digite seu e-mail"
            value={emailField}
            onChangeText={t=>setEmailField(t)}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <ComponentInput 
            IconSvg={LockIcon}
            placeholder="Digite sua senha"
            value={passwordField}
            onChangeText={t=>setPasswordField(t)}
            password={true}
            autoCapitalize="none"
          />

          <ForgotPassword onPress={() => {}}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>

          <ComponentButton onPress={() => {}}>Login</ComponentButton>

          <CreateAccountButton>
            <CreateAccountText>Não é cadastrado?</CreateAccountText>
            <CreateAccountTextButton onPress={handleCadastro}>
              <CreateAccountTextButtonBold>Clique aqui</CreateAccountTextButtonBold>
            </CreateAccountTextButton>
          </CreateAccountButton>

        </InputArea>    

      </Container>

    </ScrollView>

    </KeyboardAvoidingView>
  );
}

export default SignIn;

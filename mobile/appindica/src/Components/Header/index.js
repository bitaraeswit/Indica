import React, { useState } from "react";
import { Image, Text, Alert } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import LogoImg from "../../assets/imagens/logoHeader.svg";

import {
  Container,
  ContainerHeader,
  HeaderCenter,
  HeaderCenterLogo,
  HeaderLeft,
  HeaderRight,
  TitleText,
  HeaderLeftSize
} from "./styles";

function Header ({buttonBack, displayLogo, titleText}) {
  const nav = useNavigation();
  function handleVoltar() {
    nav.goBack();
  }

  return (
    <Container>
      <ContainerHeader>
        <HeaderLeft>
          <HeaderLeftSize>
          {buttonBack ? (
            <BorderlessButton onPress={handleVoltar}>
              <Icon
                name="arrow-back"
                style={{
                  fontSize: 30,
                  color: "#9728AD"
                }}
              />
            </BorderlessButton>
          ) : null}
          </HeaderLeftSize>
        </HeaderLeft>
        <HeaderCenter>
          <HeaderCenterLogo>
            {displayLogo ? (
              <LogoImg />
            ) : (
              <TitleText>{titleText}</TitleText>
            )}
          </HeaderCenterLogo>
        </HeaderCenter>
        <HeaderRight />
      </ContainerHeader>
    </Container>
  );
};

export default Header;

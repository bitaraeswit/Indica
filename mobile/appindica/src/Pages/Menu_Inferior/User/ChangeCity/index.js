import React, { useRef, useState } from "react";
import { SectionList} from "react-native";
import { Modalize } from 'react-native-modalize';

import ComponenteHeader from "../../../../Components/Header";
import InputField from "../../../../Components/InputField";

import { 
  Container, 
  InputFieldContainer, 
  ContainerInformation,
  Title,
  MainTitle,
  CityContainer,
  CityText,
  StateText,
  LocationContainer,
  Location,
  FirstColumn,
  TitleText,
  LocationText,
  SecondColumn,
  ButtonClose,
  Icon,
  Header
} from "./styles";

function ChangeCity() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const DATA = [
    {
      title: "Estado1",
      data: ["Cidade1", "Cidade2", "Cidade3"]
    },
    {
      title: "Estado2",
      data: ["Cidade1", "Cidade2", "Cidade3"]
    }
  ];

  //Modalize
  const modalizeRef = useRef(null); 

  const onOpen = () => {   
    if (modalizeRef.current) { 
          modalizeRef.current?.open();   
          setHeaderVisible(false);
    }
  };

  const handleClose = dest => {
    if (modalizeRef.current) {
      modalizeRef.current.close(dest);
      setHeaderVisible(true);
    }
  };

  const Item = ({ title }) => (
    <CityContainer>
      <CityText>{title}</CityText>
    </CityContainer>
  );

  return (
    <Container>
      {
        headerVisible ? (
          <ComponenteHeader
            buttonBack={true}
            displayLogo={false}
            titleText="Cidades"
          />
        ) : null
      }
      <LocationContainer>
      <MainTitle>Selecionar local</MainTitle>
        <Location onPress={onOpen}>
          <FirstColumn>
            <TitleText>Localização atual</TitleText>
            <LocationText>Viçosa, MG</LocationText>
          </FirstColumn>
          <SecondColumn>
              <Icon name="map-pin" size={24} color="#9728ad"/>
          </SecondColumn>
        </Location>
      </LocationContainer>
      <Modalize
        scrollViewProps={{showsVerticalScrollIndicator: false}}
        snapPoint={1000}
        panGestureEnabled={false}
        closeOnOverlayTap={false}
        withHandle={false}
        ref={modalizeRef}>
        <ContainerInformation style={{backgroundColor: '#FFF'}} />
        <InputFieldContainer>
          <Header>
            <Title>Cidades disponíveis</Title>
            <ButtonClose onPress={handleClose}>
              <Icon name="x" size={30} color="#9728ad"/>
            </ButtonClose>
          </Header>
          <InputField textInput="Busque a cidade"/>     
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <StateText>{title}</StateText>
            )}
          />
          
        </InputFieldContainer> 
      </Modalize>
    </Container>
  );
}

export default ChangeCity;

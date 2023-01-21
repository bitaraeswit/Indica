import React, { useState } from "react";
import { ScrollView, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";

import {
  Container,
  Category,
  CategoryButton,
  CategoryButtonText,
  CategoryButtonClean,
  CategoryButtonCleanText,
  Selection,
  ContainerModal,
  TitleModal,
  TitleModalText,
  Filters,
  Select,
  Options,
  OptionsButton,
  OptionsButtonText,
  ToApplyButton,
  ButtonText,
  ButtonClose
} from "./styles";

function Filter() {
  const [titulo, setTitulo] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filtro, setFiltro] = useState({
    categoriasSelecionadas: []
  });
  const [filtroTamanho, setFiltroTamanho] = useState([
    {
      id: "1",
      titulo: "P"
    },
    {
      id: "2",
      titulo: "M"
    },
    {
      id: "3",
      titulo: "G"
    },
    {
      id: "4",
      titulo: "GG"
    },
    {
      id: "5",
      titulo: "16"
    },
    {
      id: "6",
      titulo: "17"
    },
    {
      id: "7",
      titulo: "18"
    },
    {
      id: "8",
      titulo: "19"
    },
    {
      id: "9",
      titulo: "20"
    },
    {
      id: "10",
      titulo: "21"
    },
    {
      id: "11",
      titulo: "22"
    },
    {
      id: "12",
      titulo: "23"
    },
    {
      id: "12",
      titulo: "Único"
    }
  ]);
  const [filtroPreco, setFiltroPreco] = useState([
    {
      id: "1",
      titulo: "Até R$ 20,00"
    },
    {
      id: "2",
      titulo: "Até R$ 50,00"
    },
    {
      id: "3",
      titulo: "Até R$ 80,00"
    },
    {
      id: "4",
      titulo: "Até R$ 100,00"
    },
    {
      id: "5",
      titulo: "Até R$ 150,00"
    },
    {
      id: "6",
      titulo: "Acima de R$ 150,00"
    }
  ]);
  const [filtroRelevantes, setFiltrosRelevantes] = useState([
    {
      id: "1",
      titulo: "Útimos lançamentos"
    },
    {
      id: "2",
      titulo: "Menor preço"
    },
    {
      id: "3",
      titulo: "Maior preço"
    },
    {
      id: "4",
      titulo: "Mais vendido"
    }
  ]);
  let [categoria, setCategoria] = useState([
    {
      id: "1",
      titulo: "Botas"
    },
    {
      id: "2",
      titulo: "Bermudas"
    },
    {
      id: "3",
      titulo: "Bolsas"
    },
    {
      id: "4",
      titulo: "Caças"
    },
    {
      id: "5",
      titulo: "Camisas"
    },
    {
      id: "6",
      titulo: "Camisetas"
    },
    {
      id: "7",
      titulo: "Carteira"
    },
    {
      id: "8",
      titulo: "Coletes"
    },
    {
      id: "9",
      titulo: "Moleton"
    },
    {
      id: "10",
      titulo: "Sapatos"
    },
    {
      id: "11",
      titulo: "Sandalia"
    },
    {
      id: "12",
      titulo: "Tênis"
    }
  ]);

  function abriModalCategorias() {
    setIsModalVisible(!isModalVisible);
    setTitulo("Categoria");
  }

  function abriModalPreco() {
    setIsModalVisible(!isModalVisible);
    setTitulo("Preço");
    setFiltro(filtroPreco);
  }

  function abriModalTamanho() {
    setIsModalVisible(!isModalVisible);
    setTitulo("Tamanho");
    setFiltro(filtroTamanho);
  }

  function abriModalRelevantes() {
    setIsModalVisible(!isModalVisible);
    setTitulo("Relevantes");
    setFiltro(filtroRelevantes);
  }

  function limparModal() {
    Alert.alert("Limpa os filtros");
  }

  return (
    <Container>
      <Category>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 1 }}
        >
          <CategoryButton onPress={abriModalCategorias}>
            <CategoryButtonText>Categoria</CategoryButtonText>
            <Icon name="chevron-down-sharp" size={18} color="#696969" />
          </CategoryButton>
          <CategoryButton onPress={abriModalPreco}>
            <CategoryButtonText>Preço</CategoryButtonText>
            <Icon name="chevron-down-sharp" size={18} color="#696969" />
          </CategoryButton>
          <CategoryButton onPress={abriModalTamanho}>
            <CategoryButtonText>Tamanho</CategoryButtonText>
            <Icon name="chevron-down-sharp" size={18} color="#696969" />
          </CategoryButton>
          <CategoryButton onPress={abriModalRelevantes}>
            <CategoryButtonText>Relavantes</CategoryButtonText>
            <Icon name="chevron-down-sharp" size={18} color="#696969" />
          </CategoryButton>
          <CategoryButtonClean onPress={limparModal}>
            <CategoryButtonCleanText>Limpar</CategoryButtonCleanText>
          </CategoryButtonClean>
        </ScrollView>
      </Category>
      <Selection>
        <Modal isVisible={isModalVisible}>
          <ContainerModal>
            <TitleModal>
              <TitleModalText>{titulo}</TitleModalText>
            </TitleModal>
            <Filters>
              {categoria.map(item => (
                <Select key={String(item.id)}>
                  <Options>
                    <OptionsButton
                      onPress={() => selecionarCategoria(item)}
                      style={{
                        backgroundColor: `${
                          item.selected ? "#9728ad" : "#FFFFFF"
                        }`
                      }}
                    >
                      <OptionsButtonText>{item.titulo}</OptionsButtonText>
                    </OptionsButton>
                  </Options>
                </Select>
              ))}
            </Filters>
            <ToApplyButton>
              <ButtonText>Aplicar</ButtonText>
            </ToApplyButton>
            <ButtonClose onPress={() => setIsModalVisible(false)}>
              <ButtonText>Fechar</ButtonText>
            </ButtonClose>
          </ContainerModal>
        </Modal>
      </Selection>
    </Container>
  );
}

export default Filter;

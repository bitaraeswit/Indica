import React, { useState } from "react";
import {
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
var { height, width } = Dimensions.get("window");
import _ from "lodash";

import ComponentHeader from "../../Components/Header";
import ComponentInputField from "../InputField";

import {
  Container,
  InputFieldContainer,
  MenuGenero,
  Menu,
  MenuBotao,
  MenuText,
  Categorias,
  CategoriasBotao,
  CategoriasBotaoLimpar,
  CategoriasBotaoText,
  CategoriasBotaoLimparText,
  Selecoes,
  ContainerModal,
  BotaoAplicar,
  TextBotao,
  BotaoFechar,
  TituloModal,
  TituloModalText,
  Filtros,
  Opcoes,
  OpcoesBotao,
  OpcoesBotaoText,
  Selecionar,
  Produtos,
  ProdutosImg,
  ProdutoDescricao,
  ProdutoDescricaoTitulo,
  ProdutoPreco,
  ProdutoPrecoDesconto,
  ProdutoPrecoOriginal
} from "./styles";

function FiltrosCategoria({ route, navigation }) {
  const [id, setId] = useState(route.params.id);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [botaoPressionado, setBotaoPressionado] = useState(false);
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);
  const [filtro, setFiltro] = useState({
    categoriasSelecionadas: []
  });

  var aux = [
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
  ];

  const [filtroCategoria, setFiltroCategoria] = useState([
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

  const [produtos, setProdutos] = useState([
    {
      imagem: require("../../assets/imagens/lancamento1.jpeg"),
      id: "1",
      descricao: "Moleton to da moda super grande",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento2.jpeg"),
      id: "2",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento3.jpeg"),
      id: "3",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento4.jpeg"),
      id: "4",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento5.jpeg"),
      id: "5",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento6.jpeg"),
      id: "6",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento7.jpeg"),
      id: "7",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento1.jpeg"),
      id: "8",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento2.jpeg"),
      id: "9",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento3.jpeg"),
      id: "10",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento4.jpeg"),
      id: "11",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento5.jpeg"),
      id: "12",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento6.jpeg"),
      id: "13",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento7.jpeg"),
      id: "14",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento1.jpeg"),
      id: "15",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento2.jpeg"),
      id: "16",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento3.jpeg"),
      id: "17",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento4.jpeg"),
      id: "18",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento5.jpeg"),
      id: "19",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento6.jpeg"),
      id: "20",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento7.jpeg"),
      id: "21",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento1.jpeg"),
      id: "22",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento2.jpeg"),
      id: "23",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento3.jpeg"),
      id: "24",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento4.jpeg"),
      id: "25",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento5.jpeg"),
      id: "26",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento6.jpeg"),
      id: "27",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento7.jpeg"),
      id: "28",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento1.jpeg"),
      id: "29",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento2.jpeg"),
      id: "30",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento3.jpeg"),
      id: "31",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento4.jpeg"),
      id: "32",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento5.jpeg"),
      id: "33",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento6.jpeg"),
      id: "34",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    },
    {
      imagem: require("../../assets/imagens/lancamento7.jpeg"),
      id: "35",
      descricao: "Moleton to da moda",
      tamanho: "M",
      precoAtual: "109,99",
      precoDesconto: "79,99"
    }
  ]);
  const [titulo, setTitulo] = useState("");

  function abriModalCategorias() {
    setIsModalVisible(!isModalVisible);
    setTitulo("Categoria");
    //setFiltro(filtroCategoria);
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

  function handleExibeProduto() {
    Alert.alert("Exibirá a página com o produto!");
  }

  function limparModal() {
    Alert.alert("Limpa os filtros");
  }

  function carregaProduto(id) {
    setId(id);
  }

  function selecionarCategoria(item) {
    //let teste = categoriasSelecionadas;
    //teste = categoriasSelecionadas;
    categoriasSelecionadas.push(item);
    //setCategoriasSelecionadas(teste);
    _.map(categoria, c => {
      return (c.selected = _.includes(categoriasSelecionadas, c));
    });
    console.log(categoria);
  }

  return (
    <Container>
      <ComponentHeader 
        buttonBack={true} 
        displayLogo={true} 
      />
      <InputFieldContainer>
        <ComponentInputField textInput="Busque pelo item" />
      </InputFieldContainer>
      <MenuGenero>
        <Menu>
          <MenuBotao onPress={() => carregaProduto(1)}>
            <MenuText style={{ color: `${id == 1 ? "#9728ad" : "#696969"}` }}>
              Feminino
            </MenuText>
          </MenuBotao>
          <MenuBotao onPress={() => carregaProduto(2)}>
            <MenuText style={{ color: `${id == 2 ? "#9728ad" : "#696969"}` }}>
              Masculino
            </MenuText>
          </MenuBotao>
          <MenuBotao onPress={() => carregaProduto(3)}>
            <MenuText style={{ color: `${id == 3 ? "#9728ad" : "#696969"}` }}>
              Infantil
            </MenuText>
          </MenuBotao>
        </Menu>
      </MenuGenero>
      <Categorias>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 1 }}
        >
          <CategoriasBotao onPress={abriModalCategorias}>
            <CategoriasBotaoText>Categoria</CategoriasBotaoText>
            <Icon name="chevron-down-sharp" size={18} color="#696969" />
          </CategoriasBotao>
          <CategoriasBotao onPress={abriModalPreco}>
            <CategoriasBotaoText>Preço</CategoriasBotaoText>
            <Icon name="chevron-down-sharp" size={18} color="#696969" />
          </CategoriasBotao>
          <CategoriasBotao onPress={abriModalTamanho}>
            <CategoriasBotaoText>Tamanho</CategoriasBotaoText>
            <Icon name="chevron-down-sharp" size={18} color="#696969" />
          </CategoriasBotao>
          <CategoriasBotao onPress={abriModalRelevantes}>
            <CategoriasBotaoText>Relavantes</CategoriasBotaoText>
            <Icon name="chevron-down-sharp" size={18} color="#696969" />
          </CategoriasBotao>
          <CategoriasBotaoLimpar onPress={limparModal}>
            <CategoriasBotaoLimparText>Limpar</CategoriasBotaoLimparText>
          </CategoriasBotaoLimpar>
        </ScrollView>
      </Categorias>
      <Selecoes>
        <Modal isVisible={isModalVisible}>
          <ContainerModal>
            <TituloModal>
              <TituloModalText>{titulo}</TituloModalText>
            </TituloModal>
            <Filtros>
              {categoria.map(item => (
                <Selecionar key={String(item.id)}>
                  <Opcoes>
                    <OpcoesBotao
                      onPress={() => selecionarCategoria(item)}
                      style={{
                        backgroundColor: `${
                          item.selected ? "#9728ad" : "#FFFFFF"
                        }`
                      }}
                    >
                      <OpcoesBotaoText>{item.titulo}</OpcoesBotaoText>
                    </OpcoesBotao>
                  </Opcoes>
                </Selecionar>
              ))}
            </Filtros>
            <BotaoAplicar>
              <TextBotao>Aplicar</TextBotao>
            </BotaoAplicar>
            <BotaoFechar onPress={() => setIsModalVisible(false)}>
              <TextBotao>Fechar</TextBotao>
            </BotaoFechar>
          </ContainerModal>
        </Modal>
      </Selecoes>
      <Produtos>
        <FlatList
          numColumns={2}
          scrollEnabled={true}
          keyExtractor={item => item.id}
          data={produtos}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={handleExibeProduto}
              style={{
                width: width / 2,
                marginBottom: 10,
                padding: 5
              }}
            >
              <ProdutosImg source={item.imagem} />
              <ProdutoDescricao>
                <ProdutoDescricaoTitulo numberOfLines={1}>
                  {item.descricao + " - " + item.tamanho}
                </ProdutoDescricaoTitulo>
                <ProdutoPreco>
                  <ProdutoPrecoDesconto>
                    {"R$ " + item.precoDesconto}
                    {` `} - {` `}
                  </ProdutoPrecoDesconto>
                  <ProdutoPrecoOriginal>
                    {"R$ " + item.precoAtual}
                  </ProdutoPrecoOriginal>
                </ProdutoPreco>
              </ProdutoDescricao>
            </TouchableOpacity>
          )}
        ></FlatList>
      </Produtos>
    </Container>
  );
}

export default FiltrosCategoria;

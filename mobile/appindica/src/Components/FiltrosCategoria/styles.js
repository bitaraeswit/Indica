import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fefefe;
`;

export const InputFieldContainer = styled.View`
  padding: 0 20px;
`;

export const MenuGenero = styled.View`
  padding: 0 18px;
  margin-top: 10px;
`;

export const Menu = styled.View`
  flex-flow: row;
  justify-content: space-between;
  border-bottom-width: 0.5;
  border-bottom-color: #DBDBDB;
`;

export const Categorias = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
`;

export const CategoriasBotao = styled.TouchableOpacity`
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

export const CategoriasBotaoLimpar = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const CategoriasBotaoText = styled.Text`
  font-size: 12px;
  font-family: "Poppins-Medium";
  color: #696969;
`;

export const CategoriasBotaoLimparText = styled.Text`
  font-size: 12px;
  font-family: "Poppins-Medium";
  color: #025fa6;
`;

export const MenuBotao = styled.TouchableOpacity``;

export const MenuText = styled.Text`
  font-size: 18px;
  font-family: "Poppins-Medium";
  color: #696969;
`;

export const Selecoes = styled.View``;

export const ContainerModal = styled.View`
  background-color: #fefefe;
  padding: 20px 20px;
  border-radius: 20px;
`;

export const BotaoAplicar = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #9728ad;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const TextBotao = styled.Text`
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  font-family: "Ubuntu-Medium";
`;

export const BotaoFechar = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #025fa6;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const TituloModal = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const TituloModalText = styled.Text`
  font-size: 16px;
  font-family: "Ubuntu-Medium";
`;

export const Filtros = styled.View`
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Opcoes = styled.View``;

export const OpcoesBotao = styled.TouchableHighlight`
  padding: 5px 10px;
  border-width: 0.5;
  border-color: rgba(0, 0, 0, 0.25);
  border-radius: 10;
`;

export const OpcoesBotaoText = styled.Text`
  font-size: 14px;
  font-family: "Poppins-Regular";
  color: #696969;
`;

export const Selecionar = styled.Text`
  margin: 7px;
`;

export const Produtos = styled.View`
  margin-top: 10px;
`;

export const ProdutosImg = styled.Image`
  height: 200px;
  width: 100%;
  border-radius: 8px;
`;

export const ProdutoDescricao = styled.View`
  width: 100%;
  padding: 0 8px;
  align-items: center;
`;

export const ProdutoDescricaoTitulo = styled.Text`
  font-size: 14px;
  font-family: "Ubuntu-Regular";
  color: #696969;
`;

export const ProdutoPreco = styled.Text`
  font-size: 14px;
  font-family: "Ubuntu-Regular";
`;

export const ProdutoPrecoDesconto = styled.Text`
  color: #9728ad;
`;

export const ProdutoPrecoOriginal = styled.Text`
  color: #696969;
  text-decoration: line-through;
`;

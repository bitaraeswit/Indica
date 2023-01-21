import React, { useState } from "react";
import {
  FlatList,
  Alert,
  TouchableOpacity,
  Dimensions
} from "react-native";

var { height, width } = Dimensions.get("window");

import {
  Container,
  Product,
  ProductImg,
  ProductDescription,
  ProductDescriptionTitle,
  ProductPrice,
  ProductPriceDiscount,
  ProductPriceRegular
} from "./styles";

function ListingProduct() {
  const [lancamento, setLancamento] = useState([
    {
      image: require("../../assets/imagens/lancamento1.jpeg"),
      id: "1",
      description: "Moleton to da moda super grande",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento2.jpeg"),
      id: "2",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento3.jpeg"),
      id: "3",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento4.jpeg"),
      id: "4",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento5.jpeg"),
      id: "5",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento6.jpeg"),
      id: "6",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento7.jpeg"),
      id: "7",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento1.jpeg"),
      id: "8",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento2.jpeg"),
      id: "9",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento3.jpeg"),
      id: "10",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento4.jpeg"),
      id: "11",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento5.jpeg"),
      id: "12",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento6.jpeg"),
      id: "13",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento7.jpeg"),
      id: "14",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento1.jpeg"),
      id: "15",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento2.jpeg"),
      id: "16",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento3.jpeg"),
      id: "17",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento4.jpeg"),
      id: "18",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento5.jpeg"),
      id: "19",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento6.jpeg"),
      id: "20",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento7.jpeg"),
      id: "21",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento1.jpeg"),
      id: "22",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento2.jpeg"),
      id: "23",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento3.jpeg"),
      id: "24",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento4.jpeg"),
      id: "25",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento5.jpeg"),
      id: "26",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento6.jpeg"),
      id: "27",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento7.jpeg"),
      id: "28",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento1.jpeg"),
      id: "29",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento2.jpeg"),
      id: "30",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento3.jpeg"),
      id: "31",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento4.jpeg"),
      id: "32",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento5.jpeg"),
      id: "33",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento6.jpeg"),
      id: "34",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    },
    {
      image: require("../../assets/imagens/lancamento7.jpeg"),
      id: "35",
      description: "Moleton to da moda",
      tamanho: "M",
      priceRegular: "109,99",
      priceDiscount: "79,99"
    }
  ]);

  function handleExibeProduto() {
    Alert.alert("Exibirá a página com o produto!");
  }

  return (
    <Container>
      <Product>
        <FlatList
          numColumns={2}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={lancamento}
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
              <ProductImg
                source={item.image}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
              />
              <ProductDescription>
                <ProductDescriptionTitle numberOfLines={1}>
                  {item.description + " - " + item.tamanho}
                </ProductDescriptionTitle>
                <ProductPrice>
                  <ProductPriceDiscount>
                    {"R$ " + item.priceDiscount}
                    {` `} - {` `}
                  </ProductPriceDiscount>
                  <ProductPriceRegular>
                    {"R$ " + item.priceRegular}
                  </ProductPriceRegular>
                </ProductPrice>
              </ProductDescription>
            </TouchableOpacity>
          )}
        ></FlatList>
      </Product>
    </Container>
  );
}

export default ListingProduct;

import React, { useState } from "react";
import { ScrollView, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ComponentHeader from "../../../../Components/Header";
import InputField from "../../../../Components/InputField";

import { 
  Container, 
  Listing,
  InputFieldContainer,
  ListingCoupon,
  ListingCouponProfile,
  CouponImg,
  ListingCouponProfileInfo,
  ListingCouponProfileInfoTitle,
  ListingCouponProfileInfoAplication,
  ListingCouponProfileInfoValue
} from "./styles";

function Coupon() { 
  const nav = useNavigation();
  const [coupon, setCoupon] = useState([
    {
      imagem: require("../../../../assets/imagens/cupom25.png"),
      id: "1",
      codigo: "Coupon_25",
      valor: "25%",
      aplicacao: "Loja do Zé"
    },  
    {
      imagem: require("../../../../assets/imagens/cupom25.png"),
      id: "2",
      codigo: "CouponGERAL",
      valor: "50%",
      aplicacao: "Todas as Lojas"
    },
    {
      imagem: require("../../../../assets/imagens/cupom25.png"),
      id: "3",
      codigo: "Coupon_TOP_STORE",
      valor: "R$25,00",
      aplicacao: "Loja Top Store"
    },
    {
      imagem: require("../../../../assets/imagens/cupom25.png"),
      id: "4",
      codigo: "Coupon8",
      valor: "80%",
      aplicacao: "Loja do Zé"
    },
    {
      imagem: require("../../../../assets/imagens/cupom25.png"),
      id: "5",
      codigo: "Coupon4",
      valor: "50%",
      aplicacao: "Loja do Zé"
    }
  ]);

  return (
    <Container>
    <ComponentHeader 
      buttonBack={true} 
      displayLogo={false} 
      titleText="Meus Cupons" 
    />
          
    <InputFieldContainer>
        <InputField textInput="Busque os cupons" />
    </InputFieldContainer>
    <ScrollView>
      <Listing>
        <FlatList
          numColumns={1}
          scrollEnabled={true}
          keyExtractor={item => item.id}
          data={coupon}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                marginBottom: 10,
                paddingHorizontal: 20
              }}
            >
              <ListingCoupon>
                <ListingCouponProfile>
                  <CouponImg source={item.imagem} />
                  <ListingCouponProfileInfo>
                    <ListingCouponProfileInfoTitle numberOfLines={1}>
                      {item.codigo}
                    </ListingCouponProfileInfoTitle>
                    <ListingCouponProfileInfoValue>
                      valor: {item.valor}
                    </ListingCouponProfileInfoValue>
                    <ListingCouponProfileInfoAplication>
                      válido em: {item.aplicacao}
                    </ListingCouponProfileInfoAplication>
                  </ListingCouponProfileInfo>
                </ListingCouponProfile>
              </ListingCoupon>
            </TouchableOpacity>
          )}
        ></FlatList>
      </Listing>
    </ScrollView>
  </Container>
);
}

export default Coupon;

import React, { useState } from "react";
import { FlatList, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import ComponenteHeader from "../../../../Components/Header";

import {
  Container,
  Listing,
  ListingRequests,
  MyRequests,
  DataRequests,
  IconSphere,
  NumberRequests,
  Data,
  DataText,
  DateValue,
  ValueText,
  Value,
  Status,
  StatusText,
  InformationRequests,
  DetailRequests
} from "./styles";

function Requests() {
  const nav = useNavigation();
  const [Requests, setRequests] = useState([
    {
      id: "1",
      pedido: "0001",
      status: "Entregue",
      data: "05/05/2020 ",
      valor: "187,00"
    },
    {
      id: "2",
      pedido: "0002",
      status: "Confirmado",
      data: "05/01/2019 ",
      valor: "240,00"
    },
    {
      id: "3",
      pedido: "0003",
      status: "Cancelado",
      data: "05/01/2019 ",
      valor: "240,00"
    },
    {
      id: "4",
      pedido: "0003",
      status: "Cancelado",
      data: "05/01/2019 ",
      valor: "240,00"
    },
    {
      id: "5",
      pedido: "0004",
      status: "Cancelado",
      data: "05/01/2019 ",
      valor: "200,00"
    }
  ]);

  function handleRequestsDetail() {
    nav.navigate("RequestsDetail");
  }

  return (
    <Container>
      <ComponenteHeader
        buttonBack={true}
        displayLogo={false}
        titleText="Meus Pedidos"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Listing>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={1}
            scrollEnabled={true}
            keyExtractor={item => item.id}
            data={Requests}
            onEndReachedThreshold={0.1}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  marginBottom: 10,
                  padding: 5
                }}
              >
                <ListingRequests onPress={handleRequestsDetail}> 
                  <MyRequests>
                    <InformationRequests>
                      <IconSphere>
                          <Icon
                            name="radio-button-on-outline"
                            style={{
                              fontSize: 20,
                              color: "#9728AD"
                            }}           
                          /> 
                      </IconSphere>
                      <DataRequests >
                        <NumberRequests>{"N°: " + item.pedido}</NumberRequests>
                        <DateValue>
                          <Data>
                            <DataText>{item.data}</DataText>
                          </Data>
                          <Value>
                            <ValueText>{"      R$ " + item.valor}</ValueText>
                          </Value>
                        </DateValue>
                        <DetailRequests>
                          <Status>
                            <StatusText>{item.status}</StatusText>
                          </Status>
                        </DetailRequests>
                      </DataRequests>
                    </InformationRequests>
                    <DetailRequests>
                      <Icon
                        name="chevron-forward"
                        style={{
                            fontSize: 30,
                            color: "#9728AD"
                         }}
                      />  
                    </DetailRequests>
                  </MyRequests>
                </ListingRequests>
              </TouchableOpacity>
            )}
          ></FlatList>
        </Listing>
      </ScrollView>
    </Container>
  );
}

export default Requests;

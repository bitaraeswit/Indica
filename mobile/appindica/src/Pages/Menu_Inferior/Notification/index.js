import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, RefreshControl } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {format, parseISO} from 'date-fns';

import ComponentHeader from "../../../Components/Header";

import api from "../../../services/api";

import {
  Container,
  Listing,
  ListingNotification,
  ListingNotificationSchedule,
  ListingNotificationScheduleText,
  ListingNotificationDescription,
  ListingNotificationDescriptionTitle,
  ListingNotificationDescriptionText,
  LoadingIcon
} from "./styles";

function Notification() {
  const [notificacao, setNotificacao] = useState([
    {
      id: "1",
      schedule: "13:39",
      title: "Seja bem-vindo!",
      text:
        "É um prazer ter você por aqui, no InDica você realiza compras nas suas lojas favoritas sem precisar sair de casa."
    },
    {
      id: "2",
      schedule: "20:19",
      title: "Compra realizada com sucesso!",
      text:
        "Pedro, sua compra foi realizada com sucesso e seu produto já está sendo preparado."
    },
    {
      id: "3",
      schedule: "12:00",
      title: "Alteração de senha realizada com sucesso!",
      text: "Pedro, sua senha foi alterado com sucesso."
    }
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // carrega as lojas
  const getNotification = async () => {
    setLoading(true);
    let res = await api.get('/notificacao', {
      headers: {
          'Authorization': 'deeb02f95a10cdfac69de085111cc990'
      }
    });
    if(res !== ''){
      setNotifications(res.data.rows);
    } else {
      alert('Erro:'+res.error);
    }
    setLoading(false);
  }

  // carrega a página quando segura e arrasta para baixo
  const onRefresh = () => {
    setRefreshing(false);
    getNotification();
  }

  // chama o método que carrega as notificações sempre que a página notificação é carregada
  useEffect(() => {
    getNotification();
  },[]);

  const a =  (data) => {
    return dayjs(data)
  }

  return (
    <Container>
      <ComponentHeader
        buttonBack={false}
        displayLogo={false}
        titleText="Notificações"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Listing>
          {
            loading && 
            <LoadingIcon size="large" color="#9728AD" />
          }
          <FlatList
            numColumns={1}
            scrollEnabled={true}
            keyExtractor={item => item.id}
            data={notifications}
            onEndReachedThreshold={0.1}
            renderItem={({ item }) => (
              <ListingNotification>
                <ListingNotificationSchedule>
                  <Icon name="caret-forward-sharp" size={20} color="#9728ad" />
                  <ListingNotificationScheduleText>{format(parseISO(item.data), 'MM/dd/yyyy')}</ListingNotificationScheduleText>
                </ListingNotificationSchedule>
                <ListingNotificationDescription>
                  <ListingNotificationDescriptionTitle>Faltou campo de titulo</ListingNotificationDescriptionTitle>
                  <ListingNotificationDescriptionText>{item.descricao}</ListingNotificationDescriptionText>
                </ListingNotificationDescription>
              </ListingNotification>
            )}
          ></FlatList>
        </Listing>
      </ScrollView>
    </Container>
  );
}

export default Notification;

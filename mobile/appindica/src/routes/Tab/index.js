import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeatherIcon from 'react-native-vector-icons/Feather';

import Home from "../../Pages/Home";;
import Stores from "../../Pages/Menu_Inferior/Stores";
import ShoppingCart from "../../Pages/Menu_Inferior/ShoppingCart";
import User from "../../Pages/Menu_Inferior/User";
import Notification from "../../Pages/Menu_Inferior/Notification";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    tabBarOptions={{ 
    keyboardHidesTabBar: true,
    labelStyle: {
      fontSize: 12,
      fontFamily: 'Nunito-Bold'
    },
    style: {
      backgroundColor: '#FAFAFA',
      borderTopColor: '#17AAB2',
      borderTopWidth: 0.5,
      borderTopColor: "#DBDBDB",
      justifyContent: "center",
      alignItens: "center",
      paddingVertical: 5,
      height: 50,
    },
    activeTintColor: '#9728AD',
    inactiveTintColor: '#025FA6'
  }} 
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <FeatherIcon name="home" size={size} color={color}/>
          )
        }}
      />
      <Tab.Screen 
        name="Stores" 
        component={Stores} 
        options={{
          title: 'Lojas',
          tabBarIcon: ({ size, color }) => (
            <FeatherIcon name="shopping-bag" size={size} color={color}/>
          )
        }}
        />
      <Tab.Screen 
        name="ShoppingCart" 
        component={ShoppingCart}
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ size, color }) => (
            <FeatherIcon name="shopping-cart" size={size} color={color}/>
          )
        }}
      />
      <Tab.Screen 
        name="Notification" 
        component={Notification} 
        options={{
          title: 'Notificação',
          tabBarIcon: ({ size, color }) => (
            <FeatherIcon name="bell" size={size} color={color}/>
          )
        }}
      />
      <Tab.Screen 
        name="User" 
        component={User} 
        options={{
          title: 'Usuário',
          tabBarIcon: ({ size, color }) => (
            <FeatherIcon name="user" size={size} color={color}/>
          )
        }}
      />
    </Tab.Navigator>
  
);
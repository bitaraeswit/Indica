import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tab from '../Tab';
import CategoryFilters from "../../Components/FiltrosCategoria";
import Adresses from "../../Pages/Menu_Inferior/User/Adresses";
import ChangeCity from "../../Pages/Menu_Inferior/User/ChangeCity";
import Coupon from "../../Pages/Menu_Inferior/User/Coupon";
import MyRequests from "../../Pages/Menu_Inferior/User/MyRequests";
import RequestsDetail from "../../Pages/Menu_Inferior/User/MyRequests/RequestsDetail";
import Favorites from "../../Pages/Menu_Inferior/User/Favorites";
import Settings from "../../Pages/Menu_Inferior/User/Settings";
import ChangePassword from "../../Pages/Menu_Inferior/User/Settings/ChangePassword";
import PersonalData from "../../Pages/Menu_Inferior/User/Settings/PersonalData";
import Help from "../../Pages/Menu_Inferior/User/Help";
import About from "../../Pages/Menu_Inferior/User/Help/About";
import HowToUse from "../../Pages/Menu_Inferior/User/Help/HowToUse";
import DeliveryWays from "../../Pages/Menu_Inferior/User/Help/DeliveryWays";
import PaymentMethods from "../../Pages/Menu_Inferior/User/Help/PaymentMethods";
import Points from "../../Pages/Menu_Inferior/User/Help/Points";
import PromotionDiscounts from "../../Pages/Menu_Inferior/User/Help/PromotionDiscounts";
import StoreProfile from "../../Pages/Menu_Inferior/Stores/StoreProfile";
import SignIn from '../../Pages/Authentication/SignIn';
import SignUp from '../../Pages/Authentication/SignUp';
import PurchasingOptions from '../../Pages/PurchasingOptions';
import Checkout from '../../Pages/CheckOut';

const Stack = createStackNavigator(); 

export default function Routes() { 
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Tab} options={{ headerShown: false }}/>
      <Stack.Screen name="CategoryFilters" component={CategoryFilters} />
      <Stack.Screen name="Adresses" component={Adresses}/>
      <Stack.Screen name="MyRequests" component={MyRequests}/>
      <Stack.Screen name="RequestsDetail" component={RequestsDetail}/>
      <Stack.Screen name="Favorites" component={Favorites}/>
      <Stack.Screen name="ChangeCity" component={ChangeCity}/>
      <Stack.Screen name="Coupon" component={Coupon}/>
      <Stack.Screen name="Settings" component={Settings}/>
      <Stack.Screen name="Help" component={Help}/>
      <Stack.Screen name="StoreProfile" component={StoreProfile}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }}/>
      <Stack.Screen name="PersonalData" component={PersonalData} options={{ headerShown: false }}/>
      <Stack.Screen name="About" component={About} options={{ headerShown: false }}/>
      <Stack.Screen name="HowToUse"component={HowToUse} options={{ headerShown: false }}/>
      <Stack.Screen name="DeliveryWays" component={DeliveryWays} options={{ headerShown: false }}/>
      <Stack.Screen name="PaymentMethods" component={PaymentMethods} options={{ headerShown: false }}/>
      <Stack.Screen name="Points" component={Points} options={{ headerShown: false }}/>
      <Stack.Screen name="PromotionDiscounts" component={PromotionDiscounts} options={{ headerShown: false }}/>
      <Stack.Screen name="PurchasingOptions" component={PurchasingOptions} options={{ headerShown: false }}/>
      <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

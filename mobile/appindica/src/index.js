import React from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./routes/Stack";

function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#DCDCDC"
        hidden={false}
      />

        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    </>
  );
}

export default App;

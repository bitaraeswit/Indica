import React from "react";

import {
  InputArea,
  InputText
} from "./styles";

function Input({IconSvg, placeholder, value, onChangeText, password, autoCorrect, autoCapitalize, keyboardType}) {
  return (

    <InputArea>

      <IconSvg widith="25" height="25" fill="#9728ad"/>

      <InputText 
        placeholder={placeholder}
        placeholderTextColor="#696969"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />

    </InputArea>
    
  );
}

export default Input;

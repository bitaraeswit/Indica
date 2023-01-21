import React from "react";

import { Container, Icon, TextInput } from "./styles";

function InputField ({ textInput }) {
  return (
    <Container>
        <Icon name="search"/>
        <TextInput placeholder={textInput} />
    </Container>
  );
};

export default InputField;

import React from "react";
import { View } from "react-native";
import { Container } from "../atoms/InputContainer";
import {
  InputContainerWithLabel,
  Label,
  TextInputBox,
} from "../molecules/TextInputWithLabel";

const FirstNameLastNameContainer = () => {
  return (
    <Container>
      <InputContainerWithLabel>
        <Label>FIRST NAME</Label>
        <TextInputBox>Amanda</TextInputBox>
      </InputContainerWithLabel>
      <InputContainerWithLabel>
        <Label>LAST NAME</Label>
        <TextInputBox>Parker</TextInputBox>
      </InputContainerWithLabel>
    </Container>
  );
};

export default FirstNameLastNameContainer;

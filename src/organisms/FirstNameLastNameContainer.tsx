import React from "react";
import { View } from "react-native";
import { SplitContainer } from "../atoms/InputContainer";
import {
  InputContainerWithLabel,
  Label,
  TextInputBox,
} from "../molecules/TextInputWithLabel";

const FirstNameLastNameContainer = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
}: {
  firstName: string;
  setFirstName: any;
  lastName: string;
  setLastName: any;
}) => {
  return (
    <SplitContainer>
      <InputContainerWithLabel>
        <Label>FIRST NAME</Label>
        <TextInputBox
          onChangeText={(enteredValue) => setFirstName(enteredValue)}
        >
          {firstName}
        </TextInputBox>
      </InputContainerWithLabel>
      <InputContainerWithLabel>
        <Label>LAST NAME</Label>
        <TextInputBox
          onChangeText={(enteredValue) => setLastName(enteredValue)}
        >
          {lastName}
        </TextInputBox>
      </InputContainerWithLabel>
    </SplitContainer>
  );
};

export default FirstNameLastNameContainer;

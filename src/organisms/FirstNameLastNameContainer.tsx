import { StyleSheet } from "react-native";
import React from "react";
import {
  InputContainer,
  SplitContainer,
  Label,
  TextInput_Styled,
} from "../styledComponents/Register,Login";

const FirstNameLastName = ({ setFirstName, setLastName }: any) => {
  return (
    <InputContainer>
      <SplitContainer>
        <Label>FIRST NAME</Label>
        <TextInput_Styled
          onChangeText={(enteredValue: any) => {
            setFirstName(enteredValue);
          }}
        />
      </SplitContainer>
      <SplitContainer>
        <Label>Last Name</Label>
        <TextInput_Styled
          onChangeText={(enteredValue: any) => setLastName(enteredValue)}
        />
      </SplitContainer>
    </InputContainer>
  );
};

export default FirstNameLastName;

const styles = StyleSheet.create({});

import { StyleSheet } from "react-native";
import React from "react";
import {
  Label,
  TextInput_Styled,
  InputContainer,
  TextInputContainer,
} from "../styledComponents/Register,Login";

const EmailAddress = ({ email, setEmail }: any) => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Email Address</Label>
        <TextInput_Styled onChangeText={(value: any) => setEmail(value)} />
      </TextInputContainer>
    </InputContainer>
  );
};

export default EmailAddress;

const styles = StyleSheet.create({});

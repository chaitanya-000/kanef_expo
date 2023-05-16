import { StyleSheet } from "react-native";
import React from "react";
import {
  Label,
  TextInput_Styled,
  InputContainer,
  TextInputContainer,
  InputContainerLogin,
} from "../styledComponents/Register,Login";

const EmailAddressLogin = ({ email, setEmail }: any) => {
  return (
    <InputContainerLogin>
      <TextInputContainer>
        <Label>Email Address</Label>
        <TextInput_Styled onChangeText={(value: any) => setEmail(value)} />
      </TextInputContainer>
    </InputContainerLogin>
  );
};

export default EmailAddressLogin;

const styles = StyleSheet.create({});

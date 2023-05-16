import { StyleSheet } from "react-native";
import React from "react";
import {
  Label,
  TextInput_Styled,
  InputContainer,
  TextInputContainer,
  InputContainerLogin,
} from "../styledComponents/Register,Login";

const PasswordLogin = ({ setPassword }: any) => {
  return (
    <InputContainerLogin>
      <TextInputContainer>
        <Label>Password</Label>
        <TextInput_Styled
          textContentType="password"
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
        />
      </TextInputContainer>
    </InputContainerLogin>
  );
};

export default PasswordLogin;

const styles = StyleSheet.create({});

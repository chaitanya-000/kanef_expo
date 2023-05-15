import { StyleSheet } from "react-native";
import React from "react";
import {
  Label,
  TextInput_Styled,
  InputContainer,
  TextInputContainer,
} from "../styledComponents/Register,Login";

const Password = ({ setPassword }: any) => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Password</Label>
        <TextInput_Styled
          textContentType="password"
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
        />
      </TextInputContainer>
    </InputContainer>
  );
};

export default Password;

const styles = StyleSheet.create({});

import { StyleSheet } from "react-native";
import React from "react";
import {
  Label,
  TextInput_Styled,
  InputContainer,
  TextInputContainer,
  InputContainerLogin,
} from "../styledComponents/Register,Login";

const Password = ({ setPassword, password }: any) => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>
          Password :{" "}
          {password.length < 6
            ? "must be at least 6 characters long"
            : "Good to go"}
        </Label>
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

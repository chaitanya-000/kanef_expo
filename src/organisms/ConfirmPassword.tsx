import { StyleSheet } from "react-native";
import React from "react";
import {
  Label,
  TextInput_Styled,
  InputContainer,
  TextInputContainer,
} from "../styledComponents/Register,Login";

const ReenterPassword = ({ setRe_enteredPassword }: any) => {
  return (
    <InputContainer>
      <TextInputContainer>
        <Label>Re-Enter Password</Label>
        <TextInput_Styled
          textContentType="password"
          secureTextEntry
          onChangeText={(value) => setRe_enteredPassword(value)}
        />
      </TextInputContainer>
    </InputContainer>
  );
};

export default ReenterPassword;

const styles = StyleSheet.create({});

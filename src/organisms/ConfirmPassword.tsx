import React from "react";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

const ConfirmPassword = ({
  reEnteredPassword,
  setReEnteredPassword,
  password,
}: any) => {
  return (
    <FullWidthContainer>
      <Label>
        {password === reEnteredPassword
          ? "Password Matched"
          : "Passwords do not match"}
      </Label>
      <FullWidthTextInputBox
        secureTextEntry
        onChangeText={(value) => setReEnteredPassword(value)}
      ></FullWidthTextInputBox>
    </FullWidthContainer>
  );
};

export default ConfirmPassword;

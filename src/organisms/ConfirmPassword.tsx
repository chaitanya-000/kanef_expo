import React from "react";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

const ConfirmPassword = ({ reEnteredPassword, setReEnteredPassword }: any) => {
  return (
    <FullWidthContainer>
      <Label>CONFIRM PASSWORD</Label>
      <FullWidthTextInputBox
        secureTextEntry
        onChangeText={(value) => setReEnteredPassword(value)}
      ></FullWidthTextInputBox>
    </FullWidthContainer>
  );
};

export default ConfirmPassword;

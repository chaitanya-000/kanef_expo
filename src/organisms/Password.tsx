import React from "react";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

const Password = () => {
  return (
    <FullWidthContainer>
      <Label>PASSWORD</Label>
      <FullWidthTextInputBox secureTextEntry>password</FullWidthTextInputBox>
    </FullWidthContainer>
  );
};

export default Password;

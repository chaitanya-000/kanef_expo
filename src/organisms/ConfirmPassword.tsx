import React from "react";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

const ConfirmPassword = ({ password }: { password: any }) => {
  return (
    <FullWidthContainer>
      <Label>CONFIRM PASSWORD</Label>
      <FullWidthTextInputBox secureTextEntry>password</FullWidthTextInputBox>
    </FullWidthContainer>
  );
};

export default ConfirmPassword;

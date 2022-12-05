import React from "react";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

const EmailAddress = () => {
  return (
    <FullWidthContainer>
      <Label>EMAIL ADDRESS</Label>
      <FullWidthTextInputBox />
    </FullWidthContainer>
  );
};

export default EmailAddress;

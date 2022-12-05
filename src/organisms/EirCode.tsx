import React from "react";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

const EirCode = () => {
  return (
    <FullWidthContainer>
      <Label>EIRCODE</Label>
      <FullWidthTextInputBox textContentType="postalCode">
        4324234
      </FullWidthTextInputBox>
    </FullWidthContainer>
  );
};

export default EirCode;

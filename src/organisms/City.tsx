import React from "react";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

const City = () => {
  return (
    <FullWidthContainer>
      <Label>CITY</Label>
      <FullWidthTextInputBox textContentType="addressCity">
        {/* Maica */}
      </FullWidthTextInputBox>
    </FullWidthContainer>
  );
};

export default City;

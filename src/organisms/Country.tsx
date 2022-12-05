import React from "react";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

const Country = () => {
  return (
    <FullWidthContainer>
      <Label>Country</Label>
      <FullWidthTextInputBox textContentType="countryName">
        South America
      </FullWidthTextInputBox>
    </FullWidthContainer>
  );
};

export default Country;

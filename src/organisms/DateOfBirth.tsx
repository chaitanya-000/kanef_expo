import React from "react";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

const DateOfBirth = () => {
  return (
    <FullWidthContainer>
      <Label>DATE OF BIRTH</Label>
      <FullWidthTextInputBox>ADD DATEPICKER</FullWidthTextInputBox>
    </FullWidthContainer>
  );
};

export default DateOfBirth;

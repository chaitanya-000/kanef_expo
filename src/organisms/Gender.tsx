import React from "react";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

const Gender = () => {
  return (
    <FullWidthContainer>
      <Label>Gender</Label>
      <FullWidthTextInputBox>ADD SELECT (DROPDOWN)</FullWidthTextInputBox>
    </FullWidthContainer>
  );
};

export default Gender;

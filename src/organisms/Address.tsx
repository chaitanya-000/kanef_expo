import React from "react";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

const Address = () => {
  return (
    <>
      <FullWidthContainer>
        <Label>ADDRESS LINE 1</Label>
        <FullWidthTextInputBox>
          8502 Preston Rd. Inglewood,
        </FullWidthTextInputBox>
      </FullWidthContainer>
      <FullWidthContainer>
        <Label>ADDRESS LINE 2</Label>
        <FullWidthTextInputBox>ADD SELECT (DROPDOWN)</FullWidthTextInputBox>
      </FullWidthContainer>
    </>
  );
};

export default Address;

import React from "react";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";
import { useState } from "react";

const EmailAddress = ({
  email,
  setEmail,
}: {
  email: string;
  setEmail: any;
}) => {
  return (
    <FullWidthContainer>
      <Label>EMAIL ADDRESS</Label>
      <FullWidthTextInputBox
        textContentType="emailAddress"
        onChangeText={(enteredValue) => setEmail(enteredValue)}
      ></FullWidthTextInputBox>
    </FullWidthContainer>
  );
};

export default EmailAddress;

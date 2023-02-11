import React from "react";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

const Password = ({
  password,
  setPassword,
}: {
  password: string;
  setPassword: any;
}) => {
  return (
    <FullWidthContainer>
      <Label>
        {password.length < 5
          ? "Password should be at least 5 characters long"
          : "Good to go !"}
      </Label>
      <FullWidthTextInputBox
        secureTextEntry
        onChangeText={(enteredValue) => setPassword(enteredValue)}
      >
        {password}
      </FullWidthTextInputBox>
    </FullWidthContainer>
  );
};

export default Password;

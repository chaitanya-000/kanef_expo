import { Picker } from "@react-native-picker/picker";
import React from "react";
import SelectGender from "../atoms/SelectGender";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

const Gender = () => {
  return (
    <FullWidthContainer>
      <Label>Gender</Label>
      {/* <SelectGender /> */}
      <FullWidthTextInputBox>ADD SELECT (DROPDOWN)</FullWidthTextInputBox>
    </FullWidthContainer>
  );
};

export default Gender;

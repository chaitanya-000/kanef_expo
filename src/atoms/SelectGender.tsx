import { Picker } from "@react-native-picker/picker";
import React from "react";

const SelectGender = () => {
  return (
    <Picker style={{ height: 50, width: 150 }}>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};

export default SelectGender;

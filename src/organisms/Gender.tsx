import { useState } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FullWidthContainer } from "../molecules/FullWidthInputContainer";
import { Label } from "../molecules/TextInputWithLabel";

export default function Gender() {
  const [genderOpen, setGenderOpen] = useState(false);
  const [gender, setgender] = useState(null);
  return (
    <FullWidthContainer>
      <Label>GENDER</Label>
      <DropDownPicker
        dropDownDirection="TOP"
        disableBorderRadius
        placeholder="Male / Female"
        items={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Prefer not to say", value: "neutral" },
        ]}
        style={styles.dropdown}
        open={genderOpen}
        value={gender}
        onPress={() => {
          setGenderOpen(!genderOpen);
        }}
        onSelectItem={() => {
          console.log("Item selected");
          setGenderOpen(false);
        }}
        closeAfterSelecting={true}
      />
    </FullWidthContainer>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    width: "100%",
    height: "67%",
    borderColor: "#dee8ef",
  },
});

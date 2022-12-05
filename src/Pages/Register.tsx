import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import {
  InputContainerWithLabel,
  Label,
  TextInputBox,
} from "../molecules/TextInputWithLabel";

const Register = () => {
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;
  return (
    <ScrollView>
      <View style={styles.container}>
        <InputContainerWithLabel>
          <Label>FIRST NAME</Label>
          <TextInputBox placeholder="Your name"></TextInputBox>
        </InputContainerWithLabel>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderWidth: 2,
    borderColor: "orange",
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Register;

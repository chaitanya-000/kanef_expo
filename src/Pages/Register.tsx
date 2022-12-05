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
import FirstNameLastNameContainer from "../organisms/FirstNameLastNameContainer";
import { Container } from "../atoms/InputContainer";
import { H3Header } from "../atoms/H3Tag";

const Register = () => {
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.H3Container}>
          <H3Header>Register</H3Header>
        </View>
        <FirstNameLastNameContainer />
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
    paddingVertical: "10%",
    paddingHorizontal: "5%",
    borderRadius: 40,
    display: "flex",
    // justifyContent: "space-evenly",
    alignItems: "center",
  },
  H3Container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // borderWidth: 1,
    width: "100%",
  },
});
export default Register;

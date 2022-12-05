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
import { H3Header } from "../atoms/H3Tag";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import EmailAddress from "../organisms/EmailAddress";
import Password from "../organisms/Password";
import DateOfBirth from "../organisms/DateOfBirth";
import Gender from "../organisms/Gender";
import Address from "../organisms/Address";
import City from "../organisms/City";
import SolidGreenButton from "../atoms/SolidGreenButton";
import Country from "../organisms/Country";
import EirCode from "../organisms/EirCode";

const Register = () => {
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;
  return (
    <ScrollView style={{ display: "flex", flex: 1 }}>
      <View style={styles.container}>
        <H3Header>Register</H3Header>
        <FirstNameLastNameContainer />
        <EmailAddress />
        <Password />
        <DateOfBirth />
        <Gender />
        <Address />
        <City />
        <Country />
        <EirCode />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderWidth: 1,
    // borderColor: "orange",
    backgroundColor: "#FFFFFF",
    paddingVertical: "12%",
    paddingHorizontal: "5%",
    borderRadius: 40,
    display: "flex",
    // justifyContent: "space-evenly",
    alignItems: "center",

    // flex: 2,
  },
});
export default Register;

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

const Register = () => {
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;
  return (
    <ScrollView>
      <View style={styles.container}>
        <H3Header>Register</H3Header>
        <FirstNameLastNameContainer />
        <EmailAddress />
        <Password />
        <DateOfBirth />
        <Gender />
        <Address />
        <City />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderWidth: 2,
    // borderColor: "orange",
    backgroundColor: "#FFFFFF",
    paddingVertical: "10%",
    paddingHorizontal: "5%",
    borderRadius: 40,
    display: "flex",
    // justifyContent: "space-evenly",
    alignItems: "center",
  },
});
export default Register;

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import {
  InputContainerWithLabel,
  Label,
  TextInputBox,
} from "../molecules/TextInputWithLabel";
import FirstNameLastNameContainer from "../organisms/FirstNameLastNameContainer";
import {
  Body1,
  Body3,
  Body2,
  Body4,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../atoms/Typography";
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
import SelectGender from "../atoms/SelectGender";
import ConfirmPassword from "../organisms/ConfirmPassword";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { GreenButton } from "../atoms/GreenButton";

const Register = () => {
  const deviceHeight = Dimensions.get("screen").height;
  const deviceWidth = Dimensions.get("window").width;
  return (
    // style={{
    //   display: "flex",
    //   flex: 1,
    //   height: deviceHeight,
    // }}
    // <View style={{ borderWidth: 2, borderColor: "red" }}>
    <ScrollView>
      <Image
        source={require("../../assets/images/RegisterScreenImage.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Heading5 style={{ alignSelf: "flex-start" }}>Register</Heading5>
        <FirstNameLastNameContainer />
        <EmailAddress />
        <Password />
        <ConfirmPassword />
        <GreenButton
          width={Dimensions.get("window").width - 40}
          height={Dimensions.get("window").height / 15}
          marginTop={50}
        >
          <Body1 style={{ color: "white" }}>Sign up with email</Body1>
        </GreenButton>
      </View>
    </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: responsiveScreenHeight(83),
    // borderWidth: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: "12%",
    paddingHorizontal: "5%",
    borderRadius: 40,
    display: "flex",
    alignItems: "center",
    position: "relative",
    bottom: "26%",
    // borderColor: "orange",
    // justifyContent: "space-evenly",
    // flex: 1,
  },
  image: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(70),
    position: "relative",
    bottom: "3%",
  },
});
export default Register;

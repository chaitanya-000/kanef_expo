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
import React, { useState } from "react";
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
import axios from "axios";

const Register = () => {
  const deviceHeight = Dimensions.get("screen").height;
  const deviceWidth = Dimensions.get("window").width;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendLoginData = ({ navigation }: any) => {
    // axios
    //   .post("http://127.0.0.1:8000/appuserregister/", {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     password: password,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    navigation.navigate("Settings");
  };
  // const sendLoginData = () => {
  //   console.log("login clicked");
  // };

  return (
    <ScrollView contentContainerStyle={styles.ScrollView}>
      <Image
        source={require("../../assets/images/RegisterScreenImage.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Heading5 style={{ alignSelf: "flex-start" }}>Register</Heading5>
        <FirstNameLastNameContainer
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
        />
        <EmailAddress email={email} setEmail={setEmail} />
        <Password password={password} setPassword={setPassword} />
        <ConfirmPassword password={password} />
        <GreenButton
          width={Dimensions.get("window").width - 40}
          height={Dimensions.get("window").height / 15}
          marginTop={50}
          onPress={() => sendLoginData()}
        >
          <Body1 style={{ color: "white" }}>Sign up with email</Body1>
        </GreenButton>
      </View>
    </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    // borderWidth: 1,
    borderColor: "blue",
    height: "115%",
    // justifyContent: "flex-start",
  },
  container: {
    width: Dimensions.get("window").width,
    height: responsiveScreenHeight(80),
    backgroundColor: "#FFFFFF",
    paddingVertical: "12%",
    paddingHorizontal: "5%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    bottom: "32%",
    borderRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,

    elevation: 15,
    // borderColor: "orange",
    // justifyContent: "space-evenly",
    // flex: 1,
    // borderWidth: 1,
  },
  image: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(70),
    position: "relative",
    bottom: "3%",
  },
});
export default Register;

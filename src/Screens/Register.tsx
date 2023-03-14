import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  FlatList,
  Alert,
  StatusBar,
} from "react-native";
import React, { useContext, useState } from "react";
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
import { AuthContext } from "../store";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Register = ({ navigation }: any) => {
  const deviceHeight = Dimensions.get("screen").height;
  const deviceWidth = Dimensions.get("window").width;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnteredPassword, setReEnteredPassword] = useState("");
  const { isLoading, setIsLoading } = useContext(AuthContext);

  const sendData = () => {
    setIsLoading(true);
    axios
      .post("https://kenaf.ie/appuserregister", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((response) => {
        setIsLoading(false);
        const status = response.data.status;
        !status && navigation.navigate("Login");
        status === "false" && Alert.alert(response.data.data);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };
  const handleRegister = () => {
    if (firstName && lastName && email && reEnteredPassword) {
      if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
        Alert.alert("Invalid Email");
      } else {
        if (password.length < 6) {
          Alert.alert("Password must be at least 6 characters long");
        } else {
          if (password !== reEnteredPassword) {
            Alert.alert("Passwords do not match");
          } else {
            sendData();
          }
        }
      }
    } else {
      Alert.alert("All fields are mandatory");
    }
  };

  return (
    <KeyboardAwareScrollView>
      <StatusBar hidden={true} />

      <Spinner visible={isLoading} />
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
        <ConfirmPassword
          password={password}
          reEnteredPassword={reEnteredPassword}
          setReEnteredPassword={setReEnteredPassword}
        />

        <GreenButton
          width={Dimensions.get("window").width - 40}
          height={Dimensions.get("window").height / 15}
          marginTop={50}
          onPress={handleRegister}
        >
          <Body1 style={{ color: "white" }}>Sign up with email</Body1>
        </GreenButton>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: responsiveScreenHeight(90),
    backgroundColor: "#FFFFFF",
    paddingVertical: "12%",
    paddingHorizontal: "5%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    bottom: "22%",
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

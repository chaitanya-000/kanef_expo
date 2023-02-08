import React, { useContext } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Body1, Heading3, Heading5 } from "../atoms/Typography";
import EmailAddress from "../organisms/EmailAddress";
import Password from "../organisms/Password";
import { useNavigation } from "@react-navigation/native";
import { GreenButton } from "../atoms/GreenButton";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../store";
import { useEvent } from "react-native-reanimated";
import Spinner from "react-native-loading-spinner-overlay";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, isLoading } = useContext(AuthContext);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
      }
    } catch (e) {}
  };

  return (
    <KeyboardAwareScrollView>
      <Spinner visible={isLoading} />

      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/images/LoginScreenImage.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Heading5 style={{ alignSelf: "flex-start" }} onPress={getData}>
          Login
        </Heading5>
        <EmailAddress email={email} setEmail={setEmail} />
        <Password password={password} setPassword={setPassword} />
        <GreenButton
          height={"8%"}
          marginTop={"7%"}
          width={"100%"}
          onPress={() => handleLogin(email, password)}
          // onPress={() => navigation.navigate("Settings")}
        >
          <Body1 style={{ color: "white" }}>Login</Body1>
        </GreenButton>
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // borderWidth: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: "12%",
    paddingHorizontal: "5%",
    borderRadius: 40,
    display: "flex",
    alignItems: "center",
    position: "relative",
    bottom: "10%",
    // justifyContent: "space-evenly",

    // flex: 2,
  },
  image: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(55),
  },
});
export default Login;

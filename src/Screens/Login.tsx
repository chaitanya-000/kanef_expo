import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
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

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  // const sendLoginData = ({ navigation }: any) => {
  //   axios
  //     .post("http://127.0.0.1:8000/applogincheckusers", {
  //       email: email,
  //       password: password,
  //     })
  //     .then((response: any) => {
  //       const token = response.data.token;
  //       setToken(token);
  //       AsyncStorage.setItem("token", JSON.stringify(token));
  //       console.log(token);
  //     })
  //     .catch((error: any) => console.log(error));
  // };
  //    token && navigation.navigate("Settings");
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/images/LoginScreenImage.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Heading5
          onPress={() => console.log(token)}
          style={{ alignSelf: "flex-start" }}
        >
          Login
        </Heading5>
        <EmailAddress email={email} setEmail={setEmail} />
        <Password password={password} setPassword={setPassword} />
        <GreenButton
          height={"8%"}
          marginTop={"7%"}
          width={"100%"}
          onPress={() => navigation.navigate("Settings")}
        >
          <Body1 style={{ color: "white" }}>Login</Body1>
        </GreenButton>
      </View>
    </>
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
    bottom: "15%",
    // justifyContent: "space-evenly",

    // flex: 2,
  },
  image: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(55),
  },
});
export default Login;

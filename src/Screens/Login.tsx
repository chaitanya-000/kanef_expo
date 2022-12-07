import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Body1, Heading3, Heading5 } from "../atoms/Typography";
import EmailAddress from "../organisms/EmailAddress";
import Password from "../organisms/Password";
import { useNavigation } from "@react-navigation/native";
import { GreenButton } from "../atoms/GreenButton";

const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Heading5 style={{ alignSelf: "flex-start" }}>Login</Heading5>
      <EmailAddress />
      <Password />
      <GreenButton height={"8%"} marginTop={"7%"} width={"100%"}>
        <Body1 style={{ color: "white" }}>Login</Body1>
      </GreenButton>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: "12%",
    paddingHorizontal: "5%",
    borderRadius: 40,
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-evenly",

    // flex: 2,
  },
});
export default Login;

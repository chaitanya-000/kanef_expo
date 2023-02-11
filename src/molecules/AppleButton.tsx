import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Body1 } from "../atoms/Typography";
import * as AppleAuthentication from "expo-apple-authentication";

export default function AppleButton() {
  return (
    // <TouchableOpacity style={styles.button}>
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={15}
      style={styles.button}
      onPress={async () => {
        try {
          const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ],
          });
          credential;
        } catch (error: any) {
          if (error.code === "ERR_CANCELED") {
            error.message;
          }
        }
      }}
    />
  );
}
const styles = StyleSheet.create({
  button: {
    // borderRadius: 2,
    width: "42%",
    height: "37%",
    // backgroundColor: "#121F27",
    display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // borderTopStartRadius: 15,
    // borderBottomEndRadius: 15,
    // borderBottomLeftRadius: 15,
    // borderTopRightRadius: 15,
  },
});

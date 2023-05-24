import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import React from "react";
import { Body1 } from "../atoms/Typography";
import * as AppleAuthentication from "expo-apple-authentication";

export default function AppleButton() {
  const handleAppleSignIn = async () => {
    try {
      const credential: any = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      // Handle the signed-in user's credential
      console.log(credential);
      // Access user's name and email

      Alert.alert("Success", `Welcome, ${credential?.fullName.givenName}`);
    } catch (error: any) {
      if (error.code === "ERR_CANCELED") {
        // User canceled the sign-in flow
        Alert.alert("Cancelled", "Sign-in process was cancelled.");
      } else {
        // Handle other errors
        Alert.alert("Error", "An error occurred during sign-in.");
      }
    }
  };

  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={24}
      style={styles.button}
      onPress={handleAppleSignIn}
    />
    // <TouchableOpacity
    //   style={{
    //     borderRadius: 15,
    //     width: "42%",
    //     height: "37%",
    //     backgroundColor: "#121F27",
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Image source={require("../../assets/images/AppleLogo.png")} />

    //   <Body1 style={{ color: "white", marginLeft: "6%" }}>Apple</Body1>
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    width: "42%",
    height: "37%",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

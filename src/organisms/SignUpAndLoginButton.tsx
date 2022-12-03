import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import GoogleButton from "../molecules/GoogleButton";
import AppleButton from "../molecules/AppleButton";

export default function SignUpAndLoginButton() {
  return (
    <View style={styles.container}>
      <GoogleButton />
      <AppleButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "blue",
    height: "19.5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

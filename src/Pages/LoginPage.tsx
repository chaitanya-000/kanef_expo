import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import SignUpLoginContainer from "../organisms/SignUpLoginContainer";
import LineDivider from "../organisms/LineDivider";
import GoogleAndAppleButton from "../organisms/GoogleAndAppleButton";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/myLoginImage.png")}
        style={styles.image}
      />
      <SignUpLoginContainer />
      <LineDivider />
      <GoogleAndAppleButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "56%",
  },
});

import { StatusBar } from "expo-status-bar";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppleButton from "./src/molecules/AppleButton";
import GoogleButton from "./src/molecules/GoogleButton";
import OutlinedGreenButton from "./src/atoms/OutlinedGreenButton";
import SolidGreenButton from "./src/atoms/SolidGreenButton";
import LoginPage from "./src/Pages/LoginPage";
import GoogleAndAppleButton from "./src/organisms/GoogleAndAppleButton";
import SignUpLoginContainer from "./src/organisms/SignUpLoginContainer";

export default function App() {
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView style={{ width: deviceWidth, height: deviceHeight }}>
      <SignUpLoginContainer />
    </SafeAreaView>
  );
}

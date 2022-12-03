import { StatusBar } from "expo-status-bar";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppleButton from "./src/molecules/AppleButton";
import GoogleButton from "./src/molecules/GoogleButton";
import OutlinedGreenButton from "./src/molecules/OutlinedGreenButton";
import SolidGreenButton from "./src/molecules/SolidGreenButton";
import SignUpAndLoginButton from "./src/organisms/SignUpAndLoginButton";
import LoginPage from "./src/Pages/LoginPage";

export default function App() {
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView style={{ width: deviceWidth, height: deviceHeight }}>
      <SignUpAndLoginButton />
    </SafeAreaView>
  );
}

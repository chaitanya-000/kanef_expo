import { StatusBar } from "expo-status-bar";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppleButton from "./src/molecules/AppleButton";
import GoogleButton from "./src/molecules/GoogleButton";
import OutlinedGreenButton from "./src/atoms/OutlinedGreenButton";
import SolidGreenButton from "./src/atoms/SolidGreenButton";
import LoginPage from "./src/Pages/LoginPage";
import GoogleAndAppleButton from "./src/organisms/GoogleAndAppleButton";
import SignUpLoginContainer from "./src/organisms/SignUpLoginContainer";
import LineDivider from "./src/organisms/LineDivider";

export default function App() {
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;
  return (
    <View>
      <LoginPage />
    </View>
  );
}

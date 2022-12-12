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
import Gender from "../organisms/Gender";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* <LinearGradient colors={["white"]}> */}
      <Image
        source={require("../../assets/images/LoginPageImage.png")}
        style={styles.image}
      />
      {/* </LinearGradient> */}
      <SignUpLoginContainer
        navigation={navigation}
        style={styles.SignUpAndLoginContainer}
      />
      <LineDivider />
      <GoogleAndAppleButton />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    // marginTop: "2%",
  },
  image: {
    // width: ",
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(55),
  },
  SignUpAndLoginContainer: {
    // borderWidth: 12,
    // position: "relative",
    // bottom: "20%",
  },
});

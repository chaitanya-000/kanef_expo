import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from "react-native";
import React, { useContext } from "react";
import SignUpLoginContainer from "../organisms/SignUpLoginContainer";
import LineDivider from "../organisms/LineDivider";
import GoogleAndAppleButton from "../organisms/GoogleAndAppleButton";
import Gender from "../organisms/Gender";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { AuthContext } from "../store";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image
        source={require("../../assets/images/LoginPageImage.png")}
        style={styles.image}
      />
      <SignUpLoginContainer navigation={navigation} />
      {/* <LineDivider /> */}
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
  },
  image: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(65),
  },
});

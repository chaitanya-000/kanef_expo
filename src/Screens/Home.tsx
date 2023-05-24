import { View, StyleSheet, Image, StatusBar } from "react-native";
import React, { useContext } from "react";
import SignUpLoginContainer from "../organisms/SignUpLoginContainer";
import LineDivider from "../organisms/LineDivider";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import GoogleAndAppleButton from "../organisms/GoogleAndAppleButton";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../store";

const Home = ({ navigation }: any) => {
  const { isLoading } = useContext(AuthContext);

  return (
    <View style={styles.pageContainer}>
      <Spinner visible={isLoading} />
      <StatusBar hidden={true} />
      <Image
        source={require("../../assets/images/LoginPageImage.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <SignUpLoginContainer navigation={navigation} />
        <LineDivider />
        <GoogleAndAppleButton navigation={navigation} />
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  pageContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    // backgroundColor: "red",
    // borderColor: "red",
  },
  image: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(60),
  },
  container: {
    width: "100%",
    height: "100%",
    // backgroundColor: "orange",
    position: "relative",
    bottom: "5%",
    alignItems: "center",
  },
});

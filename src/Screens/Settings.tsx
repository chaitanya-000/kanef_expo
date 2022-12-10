import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import FooterToolBar from "../organisms/FootertoolBar";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import HorizontalDividerLine from "../atoms/HorizontalDividerLine";
import AccountSettings from "../molecules/AccountSettings";
import Help from "../molecules/Help";
import SettingsOptionContainer from "../organisms/SettingsOptionContainer";
import { Body1, Body2, Body3, Heading3, Heading6 } from "../atoms/Typography";

export default function Settings() {
  return (
    <View style={styles.pageContainer}>
      <Heading6 style={{ color: "white" }}>Settings</Heading6>
      <View style={styles.WhiteImageAndOptionsContainer}>
        <Image
          source={require("../../assets/images/ProfileImage.png")}
          style={styles.ProfileImage}
        />
        <SettingsOptionContainer />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pageContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#121F27",
    borderWidth: 1,
    // borderColor: "blue",
  },
  // headerColorSection: {
  //   width: "100%",
  //   height: "20%",
  //   backgroundColor: "black",
  // },
  ProfileImage: {
    marginTop: "3%",

    // borderWidth: 1,
    borderColor: "red",
    position: "relative",
    // top: "8%",
    bottom: "12%",
    zIndex: 21123,
    alignSelf: "center",
  },
  WhiteImageAndOptionsContainer: {
    borderColor: "green",
    borderWidth: 1.2,
    width: "100%",
    height: "78%",
    alignItems: "center",
    // justifyContent: "space-evenly",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: "relative",
    marginTop: "22%",
  },
});

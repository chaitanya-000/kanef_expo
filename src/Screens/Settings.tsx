import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import FooterToolBar from "../organisms/FootertoolBar";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import SettingsOptionContainer from "../organisms/SettingsOptionContainer";
import { Heading6 } from "../atoms/Typography";

export default function Settings({ navigation }: any) {
  return (
    <View style={styles.pageContainer}>
      <StatusBar hidden={true} />

      <Heading6 style={{ color: "white" }}>Settings</Heading6>
      <View style={styles.WhiteImageAndOptionsContainer}>
        <Image
          source={{
            uri: "https://kenaf.ie/public/images/noimage.png",
          }}
          style={styles.ProfileImage}
        />
        <SettingsOptionContainer navigation={navigation} />
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
    // borderWidth: ,
    // borderColor: "blue",
  },
  // headerColorSection: {
  //   width: "100%",
  //   height: "20%",
  //   backgroundColor: "black",
  // },
  ProfileImage: {
    marginTop: "3%",
    width: responsiveScreenWidth(33),
    height: responsiveScreenHeight(15),
    // borderWidth: 1,
    borderColor: "red",
    position: "relative",
    // top: "8%",
    bottom: "11%",
    zIndex: 21123,
    alignSelf: "center",
    borderRadius: 60,
  },
  WhiteImageAndOptionsContainer: {
    borderColor: "green",
    borderWidth: 2.2,
    width: "100%",
    height: "78%",
    alignItems: "center",
    // justifyContent: "space-evenly",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: "relative",
    marginTop: "22%",
    marginBottom: "9%",
  },
});

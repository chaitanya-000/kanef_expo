import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Body1, Body2, Body3, Body4, Heading6 } from "../atoms/Typography";
import { Entypo, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import HorizontalDividerLine from "../atoms/HorizontalDividerLine";

export default function OpenOnCamera() {
  return (
    <View
      style={{
        // borderWidth: 0.2,
        height: responsiveScreenHeight(7),
        width: responsiveScreenWidth(87),
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity style={styles.container}>
        <View style={styles.IconAndName}>
          <SimpleLineIcons
            name="camera"
            size={26}
            style={{ marginRight: "8.8%" }}
          />
          <Body2>Open on Camera</Body2>
        </View>
        <Image
          source={require("../../assets/images/OpenOnCameraToggle.png")}
          style={styles.toggleLogo}
        />
      </TouchableOpacity>
      <HorizontalDividerLine />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(7),
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    // borderWidth: 2,
    width: responsiveScreenWidth(9),
    height: responsiveScreenHeight(6),
  },
  IconAndName: {
    // borderWidth: 1,
    width: "65%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
  },
  toggleLogo: {
    width: "14%",
    height: "70%",
  },
});

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Body1, Body2, Body3, Body4, Heading6 } from "../atoms/Typography";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import HorizontalDividerLine from "../atoms/HorizontalDividerLine";

export default function Help({ navigation }: any) {
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
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Help")}
      >
        <View style={styles.IconAndName}>
          <MaterialIcons
            name="error-outline"
            size={26}
            style={{ marginRight: "9%" }}
          />
          <Body2>Help</Body2>
        </View>
        <Entypo name="chevron-right" size={30} color="gray" />
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
    width: responsiveScreenWidth(9),
    height: responsiveScreenHeight(6),
    // alignSelf: "flex-start",
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
});

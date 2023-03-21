import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Body1, Body2, Body3, Body4, Heading6 } from "../atoms/Typography";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import HorizontalDividerLine from "../atoms/HorizontalDividerLine";

export default function BankAccountDetails({ navigation }: any) {
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
        onPress={() => navigation.navigate("FeedbackScreen")}
      >
        <View style={styles.IconAndName}>
          <Image
            source={require("../../assets/images/bankaccountdetailsLogo.png")}
            style={{ marginRight: "10%", marginLeft: "2%" }}
          />
          <Body2 style={{ flex: 1 }}>Bank Account Details</Body2>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 1,
  },
  logo: {
    // borderWidth: 2,
    width: responsiveScreenWidth(9),
    height: responsiveScreenHeight(6),
  },
  IconAndName: {
    width: "65%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
    // borderWidth: 1,
  },
});

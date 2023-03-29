import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Body2 } from "../atoms/Typography";
import { Entypo, Ionicons } from "@expo/vector-icons";
import HorizontalDividerLine from "../atoms/HorizontalDividerLine";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function AccountSettings({ navigation, showIcon }: any) {
  return (
    <View
      style={{
        height: responsiveScreenHeight(7),
        width: responsiveScreenWidth(87),
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("AccountSettingsScreen")}
      >
        <View style={styles.IconAndName}>
          <Ionicons
            name="settings-outline"
            size={26}
            style={{ marginRight: "9%" }}
          />
          <Body2>Account Settings</Body2>
        </View>
        {showIcon ? (
          <Image
            source={require("../../assets/images/notification.png")}
            style={{
              width: responsiveScreenWidth(6.5),
              borderRadius: 100,
              aspectRatio: 1,
            }}
          />
        ) : (
          <Entypo name="chevron-right" size={30} color="gray" />
        )}
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
    // borderWidth: 1,
    width: responsiveScreenWidth(9),
    height: responsiveScreenHeight(6),
  },
  IconAndName: {
    // borderWidth: 1,
    width: "65%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
});

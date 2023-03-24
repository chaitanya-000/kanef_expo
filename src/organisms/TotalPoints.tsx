import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Body1, Body2, Body3, Body4, Heading6 } from "../atoms/Typography";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import HorizontalDividerLine from "../atoms/HorizontalDividerLine";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function TotalPoints({ uId, setUid, receivedDataPoints }: any) {
  return (
    <View
      style={{
        height: responsiveScreenHeight(8),
        width: responsiveScreenWidth(87),
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity style={styles.container}>
        <View style={styles.IconAndName}>
          <Text
            style={{
              fontSize: responsiveFontSize(3.2),
              fontWeight: "bold",
            }}
          >
            Total Balance : €{receivedDataPoints / 100}
          </Text>
        </View>
      </TouchableOpacity>
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
    justifyContent: "center",
  },
  logo: {
    width: responsiveScreenWidth(9),
    height: responsiveScreenHeight(6),
  },
  IconAndName: {
    // borderWidth: 0.1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

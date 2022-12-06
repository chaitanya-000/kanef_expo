import { View, Text } from "react-native";
import React from "react";
import FooterToolBar from "../organisms/FootertoolBar";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import HorizontalDividerLine from "../atoms/HorizontalDividerLine";

export default function Settings() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
      }}
    >
      <HorizontalDividerLine />
    </View>
  );
}

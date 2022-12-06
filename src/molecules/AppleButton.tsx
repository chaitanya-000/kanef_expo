import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Body1 } from "../atoms/Typography";

export default function AppleButton() {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 2,
        width: "42%",
        height: "37%",
        backgroundColor: "#121F27",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderTopStartRadius: 15,
        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
      }}
    >
      <Image source={require("../../assets/images/AppleLogo.png")} />

      <Body1 style={{ color: "white", marginLeft: "6%" }}>Apple</Body1>
    </TouchableOpacity>
  );
}

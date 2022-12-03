import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

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

      <Text
        style={{
          fontSize: 19,
          color: "white",
          fontWeight: "600",
          marginLeft: "6%",
        }}
      >
        Apple
      </Text>
    </TouchableOpacity>
  );
}

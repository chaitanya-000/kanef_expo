import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function GoogleButton() {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 2,
        width: "46%",
        height: "07%",
        backgroundColor: "#EE3A43",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderTopStartRadius: 23,
        borderBottomEndRadius: 23,
        borderBottomLeftRadius: 23,
        borderTopRightRadius: 23,
      }}
    >
      <Image source={require("../../../assets/images/GoogleDesign.png")} />

      <Text
        style={{
          fontSize: 19,
          color: "white",
          fontWeight: "600",
          marginLeft: "6%",
        }}
      >
        Google
      </Text>
    </TouchableOpacity>
  );
}

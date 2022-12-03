import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function OutlinedGreenButton() {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 2,
        width: "83%",
        height: "08%",
        borderWidth: 3,
        borderColor: "#26AE60ed",
        // backgroundColor: "#26AE60ed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopStartRadius: 25,
        borderBottomEndRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
    >
      <Text
        style={{
          fontSize: 19,
          color: "green",
          fontWeight: "700",
        }}
      >
        Login
      </Text>
    </TouchableOpacity>
  );
}

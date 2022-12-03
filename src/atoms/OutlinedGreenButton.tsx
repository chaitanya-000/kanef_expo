import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function OutlinedGreenButton() {
  return (
    <TouchableOpacity
      style={{
        width: "87%",
        height: "40%",
        borderWidth: 2.2,
        borderColor: "#26AE60ed",
        // backgroundColor: "#26AE60ed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopStartRadius: 27,
        borderBottomEndRadius: 27,
        borderBottomLeftRadius: 27,
        borderTopRightRadius: 27,
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

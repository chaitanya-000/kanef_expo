import {
  View,
  Text,
  TouchableOpacityComponent,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";

export default function SolidGreenButton() {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 2,
        width: "87%",
        height: "40%",
        backgroundColor: "#26AE60ed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopStartRadius: 24,
        borderBottomEndRadius: 24,
        borderBottomLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <Text
        style={{
          fontSize: 19,
          color: "white",
          fontWeight: "700",
        }}
      >
        Sign up with email
      </Text>
    </TouchableOpacity>
  );
}

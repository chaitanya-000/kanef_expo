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
        height: "39%",
        backgroundColor: "#26AE60ed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopStartRadius: 15,
        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
      }}
    >
      <Text
        style={{
          fontSize: 19,
          color: "white",
          fontWeight: "600",
        }}
      >
        Sign up with email
      </Text>
    </TouchableOpacity>
  );
}

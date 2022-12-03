import {
  View,
  Text,
  TouchableOpacityComponent,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { TextInsideButtons, Typography } from "./Typography";

export default function SolidGreenButton() {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 2,
        width: "83%",
        height: "08%",
        backgroundColor: "#26AE60ed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopStartRadius: 25,
        borderBottomEndRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
    >
      {/* <TextInsideButtons /> */}
    </TouchableOpacity>
  );
}

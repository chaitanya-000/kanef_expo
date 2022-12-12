import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  Body1,
  Body2,
  Body3,
  Body6,
  Heading4,
  Heading6,
} from "../atoms/Typography";

export default function GoogleButton() {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 2,
        width: "42%",
        height: "37%",
        backgroundColor: "#EE3A43",
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
      <Image source={require("../../assets/images/GoogleLogo.png")} />
      <Body1 style={{ color: "white", marginLeft: "6%" }}>Google</Body1>
    </TouchableOpacity>
  );
}

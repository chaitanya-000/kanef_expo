import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Body1 } from "./Typography";

export default function OutlinedGreenButton({ navigation }: any) {
  return (
    <TouchableOpacity
      style={{
        width: "87%",
        height: "39%",
        borderWidth: 2.2,
        borderColor: "#26AE60ed",
        // backgroundColor: "#26AE60ed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopStartRadius: 15,
        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
      }}
      // onPress={() => navigation.navigate("Login")}
    >
      <Body1 style={{ color: "#26AE60" }}>Login</Body1>
    </TouchableOpacity>
  );
}

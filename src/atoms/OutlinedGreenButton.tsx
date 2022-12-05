import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

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
      onPress={() => navigation.navigate("Login")}
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

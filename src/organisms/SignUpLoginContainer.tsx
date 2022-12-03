import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SolidGreenButton from "../atoms/SolidGreenButton";
import OutlinedGreenButton from "../atoms/OutlinedGreenButton";

export default function SignUpLoginContainer() {
  return (
    <View style={styles.container}>
      <SolidGreenButton />
      <OutlinedGreenButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "blue",
    height: "21.5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

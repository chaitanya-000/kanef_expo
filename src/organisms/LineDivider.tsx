import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LineDivider() {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.text}>OR SIGN UP USING</Text>
      <View style={styles.line}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "6%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  line: {
    width: "25%",
    height: "1%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  text: {
    color: "gray",
    fontWeight: "500",
    fontSize: 15,
  },
});

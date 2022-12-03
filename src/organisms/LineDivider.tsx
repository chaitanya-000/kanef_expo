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
    width: "95%",
    height: "6%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  line: {
    width: "30%",
    height: "1%",
    backgroundColor: "gray",
    borderWidth: 0.5,
  },
  text: {
    color: "gray",
    fontWeight: "500",
    fontSize: 15,
  },
});

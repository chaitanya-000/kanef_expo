import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import React from "react";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/myLoginImage.png")}
        style={styles.image}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "red",
    height: "100%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "55%",
  },
});

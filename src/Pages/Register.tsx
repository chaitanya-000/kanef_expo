import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import React from "react";
import LoginImageWithLogo from "../molecules/LoginImageWithLogo";
import { H3Header } from "../molecules/InputWithLabel";

const Register = () => {
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;
  return (
    <ScrollView>
      <View style={styles.container}>
        <H3Header>Register</H3Header>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderWidth: 2,
    borderColor: "orange",
    backgroundColor: "#26AE60",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Register;

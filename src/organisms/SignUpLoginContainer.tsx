import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SolidGreenButton from "../atoms/SolidGreenButton";
import OutlinedGreenButton from "../atoms/OutlinedGreenButton";

export default function SignUpLoginContainer({ navigation }: any) {
  return (
    <View style={styles.container}>
      <SolidGreenButton navigation={navigation} />
      <OutlinedGreenButton navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "100%",
    height: "17.5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
    // bottom: "2%",
    // marginTop: "1%",
  },
});

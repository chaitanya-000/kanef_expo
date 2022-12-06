import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Body6 } from "../atoms/Typography";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const ToolBarOptions = () => {
  return (
    <TouchableOpacity style={styles.options}>
      <Image
        source={require("../../assets/images/RewardCardLogo.png")}
        style={styles.logo}
      />
      <View>
        <Body6 style={styles.label}>Reward Card</Body6>
      </View>
    </TouchableOpacity>
  );
};

export default ToolBarOptions;
const styles = StyleSheet.create({
  toolbar: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(13),
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: "3%",
    paddingHorizontal: "1%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    borderWidth: 0.5,
  },
  options: {
    color: "gray",
    width: responsiveScreenWidth(19),
    height: responsiveScreenHeight(7),
    alignItems: "center",
    // padding: responsiveScreenWidth(0.2),
    // justifyContent: "space-evenly",
    // borderWidth: 1,
  },
  logo: {
    width: "70%",
    height: "90%",
    // borderWidth: 1,
  },
  label: {
    width: "100%",
    alignSelf: "center",
    color: "gray",
    fontSize: responsiveFontSize(1.4),
    // borderWidth: 1,
    marginTop: 2,
  },
});

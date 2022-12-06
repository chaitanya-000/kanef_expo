import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Body1,
  Body3,
  Body5,
  Body6,
  Heading3,
  Heading5,
  Heading6,
} from "../atoms/Typography";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const Settings = () => {
  return (
    <View style={styles.PageContainer}>
      <Body1
        style={{
          color: "white",
          alignSelf: "center",
          borderWidth: 1,
          borderColor: "orange",
        }}
      >
        Settings
      </Body1>
      <View style={styles.container}></View>
      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.options}>
          <Image
            source={require("../../assets/images/RewardCardLogo.png")}
            style={styles.logo}
          />
          <View>
            <Body6 style={styles.label}>Reward Card</Body6>
          </View>
        </TouchableOpacity>
        <View style={styles.options}>
          <Image
            source={require("../../assets/images/RewardCardLogo.png")}
            style={styles.logo}
          />
          <View>
            <Body6 style={styles.label}>My Receipt</Body6>
          </View>
        </View>
        <View style={styles.options}>
          <Image
            source={require("../../assets/images/RewardCardLogo.png")}
            style={styles.logo}
          />
          <View>
            <Body6 style={styles.label}>Camera</Body6>
          </View>
        </View>
        <View style={styles.options}>
          <Image
            source={require("../../assets/images/RewardCardLogo.png")}
            style={styles.logo}
          />
          <View>
            <Body6 style={styles.label}>Rewards</Body6>
          </View>
        </View>
        <View style={styles.options}>
          <Image
            source={require("../../assets/images/settings-3-fill.png")}
            style={styles.logo}
          />
          <View>
            <Body6 style={styles.label}>Settings</Body6>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;
const styles = StyleSheet.create({
  PageContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    width: "100%",
    height: "70%",
    marginTop: "1%",
    backgroundColor: "white",
  },
  toolbar: {
    width: "100%",
    height: "12%",
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
  },
  options: {
    color: "gray",
    width: responsiveScreenWidth(19),
    height: responsiveScreenHeight(9),
    alignItems: "center",
    // justifyContent: "space-evenly",
    // borderWidth: 1,
  },
  logo: {
    width: "70%",
    height: "80%",
    // borderWidth: 1,
  },
  label: {
    width: "100%",
    alignSelf: "center",
    color: "gray",
    fontSize: responsiveFontSize(1.3),
    // borderWidth: 1,
    marginTop: 2,
  },
});

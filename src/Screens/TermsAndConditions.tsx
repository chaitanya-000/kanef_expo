import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Body1, Body4 } from "../atoms/Typography";
import { ScrollView } from "react-native-gesture-handler";

const TermsAndConditions = () => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.pageName}>
        <Body1 style={{ color: "white", alignSelf: "center" }}>
          Terms & Conditions
        </Body1>
      </View>
      {/* ////////////////////////////////////////////// */}
      <ScrollView style={styles.whiteContainer}>
        <Text style={styles.content}>
          These terms and conditions (the "Terms") govern your access to and use
          of the Kenaf website, mobile application, and related services (the
          "Service") operated by Kenaf ("us", "we", "our"). By accessing or
          using the Service, you agree to be bound by these Terms. If you do not
          agree to all the terms and conditions of this agreement, then you may
          not access or use the Service.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  pageContainer: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    backgroundColor: "#121f27",
    alignItems: "center",
  },
  pageName: {
    width: "100%",
    height: "12%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  whiteContainer: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: "6%",
  },
  content: {
    fontWeight: "400",
    lineHeight: 25,
    fontSize: responsiveFontSize(2),
  },
});

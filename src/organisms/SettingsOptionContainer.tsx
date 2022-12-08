import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AccountSettings from "../molecules/AccountSettings";
import Help from "../molecules/Help";
import ContactUs from "../molecules/ContactUs";
import OpenOnCamera from "../molecules/OpenOnCamera";
import Feedback from "../molecules/FeedBack";
import TermsOfService from "../molecules/TermsOfService";
import PrivacyPolicy from "../molecules/PrivacyPolicy";

const SettingsOptionContainer = () => {
  return (
    <View style={styles.container}>
      <AccountSettings />
      <Help />
      <ContactUs />
      <OpenOnCamera />
      <Feedback />
      <TermsOfService />
      <PrivacyPolicy />
    </View>
  );
};

export default SettingsOptionContainer;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "orange",
    // marginTop: "16%",
    position: "relative",
    bottom: "8%",
  },
});

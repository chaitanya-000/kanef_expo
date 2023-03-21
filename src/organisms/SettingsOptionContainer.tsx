import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import AccountSettings from "../molecules/AccountSettings";
import Help from "../molecules/Help";
import ContactUs from "../molecules/ContactUs";
import OpenOnCamera from "../molecules/OpenOnCamera";
import Feedback from "../molecules/FeedBack";
import TermsOfService from "../molecules/TermsOfService";
import PrivacyPolicy from "../molecules/PrivacyPolicy";
import { GreenButton } from "../atoms/GreenButton";
import { Body1 } from "../atoms/Typography";
import { AuthContext } from "../store";
import BankAccountDetails from "../molecules/BankAccountDetails";

const SettingsOptionContainer = ({ navigation }: any) => {
  const { handleLogout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AccountSettings navigation={navigation} />
      <Help />
      <ContactUs navigation={navigation} />
      <BankAccountDetails navigation={navigation} />
      <Feedback navigation={navigation} />
      <TermsOfService navigation={navigation} />
      <PrivacyPolicy navigation={navigation} />
      <GreenButton
        height={"8%"}
        marginTop={"2%"}
        width={"90%"}
        onPress={handleLogout}
      >
        <Body1 style={{ color: "white" }}>Logout</Body1>
      </GreenButton>
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
    width: "90%",
    height: "100%",
    alignItems: "center",
  },
});

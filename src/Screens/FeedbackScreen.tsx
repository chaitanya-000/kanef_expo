import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Body1, Body2, Body3, Heading2, Heading5 } from "../atoms/Typography";
import { GreenButton } from "../atoms/GreenButton";

const FeedbackScreen = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.screenContainer}>
        <View style={styles.screenName}>
          <Body1 style={{ color: "white", alignSelf: "center" }}>
            Feedback
          </Body1>
        </View>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.whiteRoundedContainer}
        >
          <Body2
            style={{
              alignSelf: "flex-start",
              marginTop: responsiveScreenHeight(2),
            }}
          >
            Tell us how we can improve our app?
          </Body2>
          <TextInput style={styles.textArea} multiline={true} />
          <Body2
            style={{
              alignSelf: "flex-start",
              marginTop: responsiveScreenHeight(5),
            }}
          >
            Report a Problem
          </Body2>
          <TextInput style={styles.textArea} multiline={true} />
          <GreenButton
            height={"7%"}
            marginTop={"0%"}
            width={"98%"}
            style={{
              marginTop: responsiveScreenHeight(15),
            }}
          >
            <Body1 style={{ color: "white" }}>Save</Body1>
          </GreenButton>
        </KeyboardAwareScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  screenContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    alignItems: "center",
    backgroundColor: "#121f27",
  },
  screenName: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(12),
    // borderWidth: 2,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  whiteRoundedContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(98),
    backgroundColor: "white",
    marginTop: responsiveScreenHeight(3),
    borderRadius: 35,
    padding: responsiveScreenHeight(3),
    alignItems: "center",
  },
  suggestion: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(30),
    borderWidth: 2,
  },
  textArea: {
    width: "100%",
    height: "20%",
    borderWidth: 1,
    fontSize: responsiveFontSize(3),
    borderRadius: 10,
    backgroundColor: "#F6F8FA",
    borderColor: "#DEE8EF",
    marginTop: responsiveScreenHeight(2),
    paddingHorizontal:
      Platform.OS === "android"
        ? responsiveScreenWidth(3)
        : responsiveScreenWidth(6),
    paddingVertical:
      Platform.OS === "android"
        ? responsiveScreenHeight(6)
        : responsiveScreenHeight(9),
  },
});

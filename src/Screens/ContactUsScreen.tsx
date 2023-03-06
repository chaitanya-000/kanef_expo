import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  Platform,
  Alert,
  StatusBar,
  Linking,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ScreenContainer } from "../styledComponents/Receipts,Reward,BillPage";
import { WhiteRoundedContainer } from "../styledComponents/Receipts,Reward,BillPage";
import { Picker } from "@react-native-picker/picker";
import {
  Body1,
  Body2,
  Body3,
  Body5,
  Body6,
  Heading5,
  Heading6,
} from "../atoms/Typography";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import EmailAddress from "../organisms/EmailAddress";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import {
  InputContainerWithLabel,
  Label,
  TextInputBox,
} from "../molecules/TextInputWithLabel";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";

const ContactUsScreen = ({ navigation }: any) => {
  return (
    <KeyboardAwareScrollView>
      <StatusBar hidden={true} />
      <SafeAreaView
        style={{
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(100),
          alignItems: "center",
          backgroundColor: "#121f27",
        }}
      >
        <View
          style={{
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(10),
            // borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "90%",
              // borderWidth: 2,
              flexDirection: "row",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                height: "60%",
                width: "13%",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                marginRight: "15%",
                borderWidth: 1,
                borderColor: "rgba(222, 232, 239, 0.1)",
              }}
              onPress={() => navigation.navigate("Settings")}
            >
              <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
            <Body1 style={{ color: "white", alignSelf: "center" }}>
              Contact Us
            </Body1>
          </View>
        </View>
        <KeyboardAwareScrollView
          bounces={false}
          contentContainerStyle={{
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(100),
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 30,
            paddingHorizontal: responsiveScreenWidth(7),
            paddingVertical: responsiveScreenHeight(2),
          }}
        >
          <Body1
            style={{
              alignSelf: "flex-start",
              marginBottom: responsiveScreenHeight(1),
            }}
          >
            Contact Us
          </Body1>

          {/* EMAIL ////////////////////////////////////////////////////////////////////////////////////*/}
          <View style={styles.inputWithLabelContainer}>
            <Label>EMAIL ADDRESS</Label>
            <TouchableOpacity
              style={styles.inputWithLabelContainer_textInput}
              onPress={() =>
                Linking.openURL("mailto:customer.service@kenaf.ie")
              }
            >
              <Text style={{ fontSize: responsiveScreenFontSize(2.2) }}>
                customer.service@kenaf.ie
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  accountDetailsContainer: {
    width: "100%",
    height: "50%",
  },
  inputWithLabelContainer: {
    width: "100%",
    height: responsiveScreenHeight(11),
    marginTop: responsiveScreenHeight(2),
    // borderWidth: 2,
    display: "flex",
  },
  inputWithLabelContainer_DateOfBirth: {
    width: "100%",
    height: responsiveScreenHeight(11),
    marginTop: responsiveScreenHeight(2),
    // borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputWithLabelContainer_textInput: {
    width: "100%",
    height: "75%",
    borderRadius: 15,
    backgroundColor: "#f6f8fa",
    fontSize: 19,
    paddingLeft: "5%",
    color: "black",
    borderColor: "#dee8ef",
    marginTop: responsiveScreenHeight(1),
    borderWidth: 1,
    justifyContent: "center",
  },
  inputWithLabelContainer_textInput_DateOfBirth: {
    width: "100%",
    height: "75%",
    borderRadius: 15,
    backgroundColor: "#f6f8fa",
    fontSize: 19,
    paddingLeft: "5%",
    color: "black",
    borderColor: "#dee8ef",
    marginTop: responsiveScreenHeight(1),
    borderWidth: 1,
  },
  firstNameLastNameContainer: {
    width: "100%",
    height: responsiveScreenHeight(10),
    // borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  firstNameLastNameContainer_firstName: {
    width: "48%",
    height: "100%",
    // borderWidth: 2,
  },
  firstNameLastNameContainer_lastName: {
    width: "48%",
    height: "100%",
    // borderWidth: 2,
  },
  manage: {
    width: "100%",
    height: responsiveScreenHeight(5),
    // borderWidth: 3,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: responsiveScreenHeight(3),
    marginBottom: responsiveScreenHeight(3),
  },
  dropDownAndroid: {
    width: responsiveScreenWidth(60),
    borderRadius: 10,
    height: responsiveScreenHeight(7),
    paddingHorizontal: responsiveScreenWidth(5),
    borderColor: "#e9f2eb",
    borderWidth: 3,
  },
  dropDownIOS: {
    width: responsiveScreenWidth(60),
    borderRadius: 10,
    height: responsiveScreenHeight(7),

    paddingHorizontal: responsiveScreenWidth(5),
    borderColor: "#e9f2eb",
    borderWidth: 3,
  },

  dropDownContainer: {
    marginTop: responsiveScreenHeight(0.5),
    height: responsiveScreenHeight(15),
    borderWidth: 2,
    borderRadius: 10,
  },
  emptyList: {
    paddingHorizontal: responsiveScreenWidth(5),
    alignItems: "center",
    height: responsiveScreenHeight(5),
    justifyContent: "center",
  },
});

export default ContactUsScreen;

import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { ScreenContainer } from "../styledComponents/Receipts,Reward,BillPage";
import { WhiteRoundedContainer } from "../styledComponents/Receipts,Reward,BillPage";
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
import { SplitContainer } from "../atoms/InputContainer";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const AccountSettingsScreen = () => {
  return (
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
        }}
      >
        <Body1 style={{ color: "white", alignSelf: "center" }}>
          Account Settings
        </Body1>
      </View>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{
          width: responsiveScreenWidth(100),
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
          Account Details
        </Body1>

        {/* EMAIL */}
        <View style={styles.inputWithLabelContainer}>
          <Label>EMAIL ADDRESS</Label>
          <View>
            <TextInput
              style={styles.inputWithLabelContainer_textInput}
              textContentType="emailAddress"
            />
          </View>
        </View>

        {/* PASSWORD */}
        <View style={styles.inputWithLabelContainer}>
          <Label>Password</Label>
          <View>
            <TextInput
              style={styles.inputWithLabelContainer_textInput}
              secureTextEntry
            />
          </View>
        </View>

        <Body1
          style={{
            alignSelf: "flex-start",
            marginBottom: responsiveScreenHeight(1),
          }}
        >
          About Me
        </Body1>

        <View style={styles.inputWithLabelContainer}>
          <Label>Password</Label>
          <View>
            <TextInput
              style={styles.inputWithLabelContainer_textInput}
              secureTextEntry
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
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
  inputWithLabelContainer_textInput: {
    width: "100%",
    height: "75%",
    borderRadius: 15,
    backgroundColor: "#f6f8fa",
    fontSize: 19,
    paddingLeft: "5%",
    color: "black",
    borderColor: " #dee8ef",
    marginTop: responsiveScreenHeight(1),
  },
});

export default AccountSettingsScreen;

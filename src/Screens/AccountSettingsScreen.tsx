import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenContainer } from "../styledComponents/Receipts,Reward,BillPage";
import { WhiteRoundedContainer } from "../styledComponents/Receipts,Reward,BillPage";
import { Body1, Body2, Body3, Body5, Heading5 } from "../atoms/Typography";
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

const AccountSettingsScreen = () => {
  return (
    <View style={styles.Parentcontainer}>
      <Body1 style={styles.ScreenName}>Account Settings</Body1>
      <ScrollView
        contentContainerStyle={styles.whiteRoundedContainer}
        bounces={false}
      >
        <Body1
          style={{
            alignSelf: "flex-start",
            // marginTop: responsiveScreenHeight(2),
          }}
        >
          Account Details
        </Body1>
        {/* Email Address */}
        <FullWidthContainer style={{ height: "10%" }}>
          <Label>EMAIL ADDRESS</Label>
          <FullWidthTextInputBox
            textContentType="emailAddress"
            style={{ height: "60%" }}
          ></FullWidthTextInputBox>
        </FullWidthContainer>

        {/* password */}
        <FullWidthContainer style={{ height: "10%" }}>
          <Label>Password</Label>
          <FullWidthTextInputBox
            secureTextEntry
            style={{ height: "60%" }}
          ></FullWidthTextInputBox>
        </FullWidthContainer>

        {/* About me */}
        <Body1
          style={{
            alignSelf: "flex-start",
            marginTop: responsiveScreenHeight(3),
          }}
        >
          About me
        </Body1>

        {/* FirstName and LastName  */}
        <SplitContainer style={{ height: "8%" }}>
          <InputContainerWithLabel>
            <Label>FIRST NAME</Label>
            <TextInputBox></TextInputBox>
          </InputContainerWithLabel>
          <InputContainerWithLabel>
            <Label>LAST NAME</Label>
            <TextInputBox></TextInputBox>
          </InputContainerWithLabel>
        </SplitContainer>

        {/* Date Of Birth */}
        <FullWidthContainer style={{ height: "10%" }}>
          <Label>DATE OF BIRTH</Label>
          <FullWidthTextInputBox
            textContentType="emailAddress"
            style={{ height: "60%" }}
          ></FullWidthTextInputBox>
        </FullWidthContainer>

        {/* Gender */}
        <FullWidthContainer style={{ height: "10%" }}>
          <Label>GENDER</Label>
          <FullWidthTextInputBox
            textContentType="emailAddress"
            style={{ height: "60%" }}
          ></FullWidthTextInputBox>
        </FullWidthContainer>

        {/* Address Line 1 */}
        <FullWidthContainer style={{ height: "10%" }}>
          <Label>ADDRESS LINE 1</Label>
          <FullWidthTextInputBox
            textContentType="emailAddress"
            style={{ height: "60%" }}
          ></FullWidthTextInputBox>
        </FullWidthContainer>

        {/* Address Line 2 */}

        <FullWidthContainer style={{ height: "10%" }}>
          <Label>ADDRESS LINE 2 </Label>
          <FullWidthTextInputBox
            textContentType="emailAddress"
            style={{ height: "60%" }}
          ></FullWidthTextInputBox>
        </FullWidthContainer>

        {/* City */}
        <FullWidthContainer style={{ height: "10%" }}>
          <Label>EMAIL ADDRESS</Label>
          <FullWidthTextInputBox
            textContentType="emailAddress"
            style={{ height: "60%" }}
          ></FullWidthTextInputBox>
        </FullWidthContainer>

        {/* Country  */}
        <FullWidthContainer style={{ height: "10%" }}>
          <Label>EMAIL ADDRESS</Label>
          <FullWidthTextInputBox
            textContentType="emailAddress"
            style={{ height: "60%" }}
          ></FullWidthTextInputBox>
        </FullWidthContainer>

        {/* EIRCode */}
        <FullWidthContainer style={{ height: "10%" }}>
          <Label>EMAIL ADDRESS</Label>
          <FullWidthTextInputBox
            textContentType="emailAddress"
            style={{ height: "60%" }}
          ></FullWidthTextInputBox>
        </FullWidthContainer>
      </ScrollView>
    </View>
  );
};

export default AccountSettingsScreen;

const styles = StyleSheet.create({
  Parentcontainer: {
    backgroundColor: "#121f27",
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    // justifyContent: "flex-end",
    alignItems: "center",
  },
  ScreenName: {
    color: "white",
    // marginBottom: "10%",
    fontSize: responsiveScreenFontSize(3),
    marginTop: responsiveScreenHeight(7),
  },
  ContentHeader: {
    alignSelf: "flex-start",
    fontWeight: "700",
    // fontSize: "28",
  },
  whiteRoundedContainer: {
    width: responsiveScreenWidth(100),
    // height: responsiveScreenHeight(100),
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    // alignSelf: "flex-end",
    // overflow: "scroll",
    paddingHorizontal: responsiveScreenWidth(8),
  },
  container: {
    width: responsiveScreenWidth(100),
    height: "100%",
    backgroundColor: "white",
  },
});

{
  /* <View
  style={{
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(20),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
  }}
> */
}

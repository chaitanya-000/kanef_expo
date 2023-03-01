import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {
  Item,
  OptionsContainer,
  ScreenContainer,
  WhiteRoundedContainer,
} from "../styledComponents/Receipts,Reward,BillPage";
import { Body1, Body2, Body4, Body5, Heading5 } from "../atoms/Typography";
import { responsiveScreenFontSize } from "react-native-responsive-dimensions";

const RewardCard = () => {
  return (
    <ScreenContainer style={styles.ScreenContainer}>
      <StatusBar hidden={true} />

      <Body1 style={styles.ScreenName}>My Reward Card</Body1>
      <WhiteRoundedContainer>
        <OptionsContainer style={styles.OptionsContainer}>
          <Heading5 style={styles.ContentHeader}>Coming Soon.....</Heading5>
        </OptionsContainer>
      </WhiteRoundedContainer>
    </ScreenContainer>
  );
};

export default RewardCard;

const styles = StyleSheet.create({
  OptionsContainer: {
    // justifyContent: "space-even",
    alignItems: "center",
    //   borderWidth: 1,
  },
  ScreenContainer: {
    alignItems: "center",
    //   borderWidth: 1,
  },
  ScreenName: {
    color: "white",
    marginBottom: "10%",
    fontSize: responsiveScreenFontSize(3),
  },
  ContentHeader: {
    alignSelf: "center",
    fontWeight: "700",
    // fontSize: "28",
  },
  QRimage: {
    height: 325,
    width: 325,
    alignSelf: "center",
    flex: 1,
    // borderWidth: 1,
  },
  TextBelowQRcode: {
    color: "#828282",
    lineHeight: 25,
    textAlign: "center",
  },
  ImageContainer: {
    width: "100%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    //   borderWidth: 1,
  },
  ButtonText: {
    color: "white",
    fontWeight: "700",
  },
});

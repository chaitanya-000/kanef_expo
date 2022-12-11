import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Item,
  OptionsContainer,
  ScreenContainer,
  WhiteRoundedContainer,
} from "../styledComponents/Receipts,Reward,BillPage";
import { Body1, Body5, Heading5 } from "../atoms/Typography";
import { responsiveScreenFontSize } from "react-native-responsive-dimensions";

const RewardCard = () => {
  return (
    <ScreenContainer style={styles.ScreenContainer}>
      <Body1 style={styles.ScreenName}>My Reward Card</Body1>
      <WhiteRoundedContainer>
        <OptionsContainer style={styles.OptionsContainer}>
          <Heading5 style={styles.ContentHeader}>Receipts</Heading5>
          <ImageBackground
            resizeMode="cover"
            source={require("../../assets/images/QRcode1x.png")}
            style={styles.QRimage}
          />
          <Body5>
            Please scan the barcode at the Counter to redeem the rewards{" "}
          </Body5>
        </OptionsContainer>
      </WhiteRoundedContainer>
    </ScreenContainer>
  );
};

export default RewardCard;

const styles = StyleSheet.create({
  OptionsContainer: { borderWidth: 1 },
  ScreenContainer: {
    borderWidth: 1,
  },
  ScreenName: {
    color: "white",
    marginBottom: "10%",
    fontSize: responsiveScreenFontSize(3),
  },
  ContentHeader: {
    alignSelf: "flex-start",
    fontWeight: "700",
    // fontSize: "28",
  },
  QRimage: {
    height: "50%",
    width: "80%",
    borderWidth: 1,
  },
});

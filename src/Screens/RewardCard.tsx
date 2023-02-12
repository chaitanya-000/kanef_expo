import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Item,
  OptionsContainer,
  ScreenContainer,
  WhiteRoundedContainer,
} from "../styledComponents/Receipts,Reward,BillPage";
import { Body1, Body2, Body4, Body5, Heading5 } from "../atoms/Typography";
import { responsiveScreenFontSize } from "react-native-responsive-dimensions";
import { GreenButton } from "../atoms/GreenButton";

const RewardCard = () => {
  return (
    <ScreenContainer style={styles.ScreenContainer}>
      <Body1 style={styles.ScreenName}>My Reward Card</Body1>
      <WhiteRoundedContainer>
        <OptionsContainer style={styles.OptionsContainer}>
          <Heading5 style={styles.ContentHeader}>Comming Soon.....</Heading5>

          {/* <Image source={require("../../assets/images/comming-soon1.jpeg")} /> */}
          {/* <View style={styles.ImageContainer}>
            <ImageBackground
              resizeMode="cover"
              source={require("../../assets/images/QRcode3x.png")}
              style={styles.QRimage}
            />
          </View>
          <Body4 style={styles.TextBelowQRcode}>
            Please scan the barcode at the Counter to redeem the rewards{" "}
          </Body4>
          <GreenButton width={"95%"} height={"10%"} marginTop={"10%"}>
            <Body2 style={styles.ButtonText}>View in Apple Wallet</Body2>
          </GreenButton> */}
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

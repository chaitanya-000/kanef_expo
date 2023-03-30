import { StyleSheet, StatusBar, Image, View, Text } from "react-native";
import React, { useEffect, useId, useState } from "react";
import {
  Body1,
  Body2,
  Body5,
  Heading4,
  Heading5,
  Heading6,
} from "../atoms/Typography";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import {
  OptionsContainer,
  ScreenContainer,
  WhiteRoundedContainer,
} from "../styledComponents/Receipts,Reward,BillPage";
import RewardScreenModal from "../organisms/RewardScreenModal";

const RewardCard = () => {
  return (
    <>
      <StatusBar hidden={true} />

      <ScreenContainer>
        <Body1 style={styles.ScreenName}>My Reward Card</Body1>

        <View style={styles.WhiteRoundedContainer}>
          <View style={styles.ComingSoonContainer}>
            <Image source={require("../../assets/images/CommingSoon.png")} />
            <Text
              style={{
                fontSize: responsiveScreenFontSize(3.7),
                fontWeight: "600",
              }}
            >
              Coming Soon...
            </Text>
            <Text
              style={{
                fontSize: responsiveScreenFontSize(2.3),
                fontWeight: "500",
              }}
            >
              See the settings tab to claim balance.
            </Text>
          </View>
        </View>
      </ScreenContainer>

      {/* <RewardScreenModal /> */}
    </>
  );
};

const styles = StyleSheet.create({
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
  container: {
    borderWidth: 1,
    width: "100%",
    height: responsiveScreenHeight(9),
    borderRadius: 20,
    flexDirection: "row",
    padding: "3%",
    borderColor: "#dee8ef",
    marginTop: "6%",
  },
  StoreImage: {
    // borderWidth: 1,
    // borderColor: "red",
    width: "18%",
    borderRadius: 10,
    height: "100%",
  },
  NameAndType: {
    // borderWidth: 1,
    alignSelf: "flex-end",
    borderColor: "orange",
    width: "40%",
    flex: 1,
    justifyContent: "space-around",
    height: "95%",
    marginLeft: "3.5%",
  },
  rightArrow: {
    // borderWidth: 1,
    borderColor: "green",
    width: "10%",
    alignSelf: "center",
  },
  WhiteRoundedContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(87),
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
    // backgroundColor: "red",
  },
  ComingSoonContainer: {
    width: "100%",
    height: "40%",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "25%",
  },
});

export default RewardCard;

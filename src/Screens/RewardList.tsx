import { StyleSheet, StatusBar } from "react-native";
import React, { useEffect, useId, useState } from "react";
import { Body1, Body2, Body5, Heading4, Heading5 } from "../atoms/Typography";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from "react-native-responsive-dimensions";
import {
  OptionsContainer,
  ScreenContainer,
  WhiteRoundedContainer,
} from "../styledComponents/Receipts,Reward,BillPage";
import RewardScreenModal from "../organisms/RewardScreenModal";

const RewardList = () => {
  return (
    <>
      <StatusBar hidden={true} />

      <ScreenContainer>
        <Body1 style={styles.ScreenName}>Reward List</Body1>

        <WhiteRoundedContainer
          style={{
            opacity: 0.1,
          }}
        >
          <OptionsContainer></OptionsContainer>
        </WhiteRoundedContainer>
      </ScreenContainer>

      <RewardScreenModal />
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
});

export default RewardList;

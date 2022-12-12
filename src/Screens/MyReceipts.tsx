import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  Body1,
  Body2,
  Body5,
  Heading1,
  Heading3,
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
  Item,
  OptionsContainer,
  ScreenContainer,
  WhiteRoundedContainer,
} from "../styledComponents/Receipts,Reward,BillPage";
import ReceiptRewardContainer from "../molecules/ReceiptRewardContainer";
import { Feather } from "@expo/vector-icons";

const MyReceipts = () => {
  return (
    <ScreenContainer>
      <Body1 style={styles.ScreenName}>My Receipts</Body1>
      <WhiteRoundedContainer>
        <OptionsContainer>
          <Heading5 style={styles.ContentHeader}>Receipts</Heading5>
          <TouchableOpacity style={styles.container}>
            <Image
              source={require("../../assets/images/WalmartLogo.jpg")}
              style={styles.StoreImage}
            />
            <View style={styles.NameAndDate}>
              <Body2>Walmart</Body2>
              <Body5 style={{ color: "gray" }}>23 July 2022</Body5>
            </View>
            <Feather
              name="chevron-right"
              size={25}
              color="gray"
              style={styles.rightArrow}
            />
          </TouchableOpacity>
        </OptionsContainer>
      </WhiteRoundedContainer>
    </ScreenContainer>
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
  NameAndDate: {
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

export default MyReceipts;

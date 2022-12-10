import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Body1,
  Heading1,
  Heading3,
  Heading5,
  Heading6,
} from "../atoms/Typography";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import {
  PageContainer,
  WhiteRoundedContainer,
} from "../styledComponents/Receipts,Reward,BillPageTemplate";

const MyReceipts = () => {
  return (
    <PageContainer>
      <Body1 style={{ color: "white", marginBottom: "10%", fontSize: 23 }}>
        My Receipts
      </Body1>
      <WhiteRoundedContainer />
    </PageContainer>
  );
};

export default MyReceipts;

// const styles = StyleSheet.create({
//   PageContainer: {
//     backgroundColor: "#121F27",
//     width: responsiveScreenWidth(100),
//     height: responsiveScreenHeight(100),
//     justifyContent: "flex-end",
//   },
//   whiteRoundedContainer: {
//     width: responsiveScreenWidth(100),
//     height: responsiveScreenHeight(85),
//     backgroundColor: "white",
//     borderRadius: 30,
//   },
// });

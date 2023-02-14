import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { WhiteRoundedContainer } from "../styledComponents/Receipts,Reward,BillPage";
import axios from "axios";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const SeperateInvoice = ({ route }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <Image
        source={{
          uri: `https://kenaf.ie/OrgInvoice/${route.params.InvoiceLink}`,
        }}
        style={{ height: responsiveHeight(80), width: responsiveWidth(95) }}
      />
    </View>
  );
};

export default SeperateInvoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { WhiteRoundedContainer } from "../styledComponents/Receipts,Reward,BillPage";
import axios from "axios";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { ScrollView } from "react-native-gesture-handler";

const SeperateInvoice = ({ route }: any) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Spinner visible={loading} color="#26ae60ed" />
      <StatusBar hidden={true} />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://kenaf.ie/OrgInvoice/${route.params.InvoiceLink}`,
          }}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          style={styles.image}
        />
      </View>
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
  imageContainer: {
    width: "90%",
    height: "70%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "98%",
    height: "99%",
    // aspectRatio: 2,
  },
});

import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { WhiteRoundedContainer } from "../styledComponents/Receipts,Reward,BillPage";
import axios from "axios";

const SeperateInvoice = ({ route }: any) => {
  useEffect(() => {
    axios
      .get(`https://kenaf.ie/OrgInvoice/${route.params.InvoiceLink}`)
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          //   uri: `https://kenaf.ie/OrgInvoice/${route.params.InvoiceLink}`,
          //   uri: `https://picsum.photos/id/237/200/300`,
          uri: `https://kenaf.ie/OrgInvoice/${route.params.InvoiceLink}`,
        }}
        style={{ height: 600, width: 400 }}
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

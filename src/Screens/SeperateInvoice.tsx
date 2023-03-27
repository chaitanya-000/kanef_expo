import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { WhiteRoundedContainer } from "../styledComponents/Receipts,Reward,BillPage";
import axios from "axios";
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { Ionicons } from "@expo/vector-icons";
import { Body1 } from "../atoms/Typography";

const SeperateInvoice = ({ route, navigation }: any) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(13),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            height: "90%",
            flexDirection: "row",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: "50%",
              width: "13%",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              marginRight: "15%",
              borderWidth: 1,
              borderColor: "rgba(222, 232, 239, 0.1)",
            }}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
          <View
            style={{
              // borderWidth: 2,
              height: "70%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Body1
              style={{
                color: "white",
                alignSelf: "center",
                fontSize: responsiveScreenFontSize(2.6),
              }}
            >
              {route.params.StoreName} : {route.params.Date.split("T")[0]}
            </Body1>
          </View>
        </View>
      </View>
      <Spinner visible={loading} color="#26ae60ed" />
      <StatusBar hidden={true} />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://kenaf.ie/OrgInvoice/${route.params.InvoiceLink}`,
          }}
          resizeMode="contain"
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
    backgroundColor: "#121f27",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
  },
  image: {
    height: "90%",
    width: "90%",

    // aspectRatio: 3,
    // aspectRatio: 2,
  },
});

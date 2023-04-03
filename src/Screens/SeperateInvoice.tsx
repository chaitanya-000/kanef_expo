import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
  const [showOptions, setShowOptions] = useState(true);
  const [lastTap, setLastTap] = useState(0);
  const [scale, setScale] = useState(1);
  const imageRef = useRef(null);

  const handlePress = () => {
    setShowOptions(!showOptions);
  };
  const handleDoubleTap = () => {
    const now = Date.now();
    if (lastTap && now - lastTap < 300) {
      const newScale = scale === 1 ? 2 : 1;
      setScale(newScale);
    } else {
      setShowOptions(!showOptions);
      setLastTap(now);
    }
  };
  return (
    <SafeAreaView>
      <Spinner visible={loading} />
      <Pressable onPress={handleDoubleTap}>
        <Image
          source={{
            uri: `https://kenaf.ie/OrgInvoice/${route.params.InvoiceLink}`,
          }}
          style={{ width: "100%", height: "100%", transform: [{ scale }] }}
          resizeMode="contain"
        />
      </Pressable>
      {showOptions && (
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 2454,
            width: "100%",
            height: "10%",
            backgroundColor: "#26ae60ed",
            // backgroundColor: "#A9A9A9",
            // backgroundColor: "red",
            opacity: 1,
            // backgroundColor: "red",

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              width: "13%",
              aspectRatio: 1,
              flexDirection: "row",
              marginLeft: "5%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              marginRight: "5%",
              // borderWidth: 1,
              // backgroundColor: "green",
            }}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="arrow-back" size={50} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SeperateInvoice;

const styles = StyleSheet.create({});

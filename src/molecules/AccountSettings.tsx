import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Body2 } from "../atoms/Typography";
import { Entypo, Ionicons } from "@expo/vector-icons";
import HorizontalDividerLine from "../atoms/HorizontalDividerLine";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Feather } from "@expo/vector-icons";

export default function AccountSettings({ navigation }: any) {
  const [userId, setUserId] = useState("");
  const [isDataUpdated, setIsDateUpdated] = useState(true);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("uId");
      if (value !== null) {
        const uid = value;
        setUserId(uid);
      }
    } catch (e) {
      // error reading value
    }
  };

  const getUserInfo = () => {
    axios
      .post("https://kenaf.ie/appUserInfo", {
        uId: JSON.parse(userId),
      })
      .then((response) => {
        const data = response.data.data[0];

        if (
          data.DOB &&
          data.Gender &&
          data.address1 &&
          data.city &&
          data.country &&
          data.EIRcode
        ) {
          setIsDateUpdated(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
    userId && getUserInfo();
  }, [userId]);
  return (
    <View
      style={{
        // borderWidth: 0.2,
        height: responsiveScreenHeight(7),
        width: responsiveScreenWidth(87),
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("AccountSettingsScreen")}
      >
        <View style={styles.IconAndName}>
          <Ionicons
            name="settings-outline"
            size={26}
            style={{ marginRight: "9%" }}
          />
          <Body2 style={{ color: isDataUpdated ? "orange" : "black" }}>
            Account Settings
          </Body2>
        </View>
        {isDataUpdated ? (
          <Feather name="alert-triangle" size={24} color="black" />
        ) : (
          <Entypo name="chevron-right" size={30} color="gray" />
        )}
      </TouchableOpacity>
      <HorizontalDividerLine />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(7),
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    // borderWidth: 1,
    width: responsiveScreenWidth(9),
    height: responsiveScreenHeight(6),
  },
  IconAndName: {
    // borderWidth: 1,
    width: "65%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
});

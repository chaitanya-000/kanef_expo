import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Body2 } from "../atoms/Typography";
import { Entypo, Ionicons } from "@expo/vector-icons";
import HorizontalDividerLine from "../atoms/HorizontalDividerLine";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function AccountSettings({ navigation }: any) {
  const [showIcon, setShowIcon] = useState(false);

  const [userId, setUserId] = useState("");

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("uId");
      if (value !== null) {
        const uid = value;
        setUserId(uid);
      }
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };

  const getUserInfo = () => {
    console.log("this func is running");
    axios
      .post("https://kenaf.ie/appUserInfo", {
        uId: JSON.parse(userId),
      })
      .then((response) => {
        const data = response.data.data[0];
        if (data.Gender) {
          setShowIcon(true);
        } else {
          setShowIcon(false);
        }
      })
      .catch((error) => {
        alert(error.message);
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
          <Body2>Account Settings</Body2>
        </View>
        {!showIcon ? (
          <Image
            source={require("../../assets/images/notification.png")}
            style={{
              width: responsiveScreenWidth(6.5),
              // height: responsiveScreenHeight(4),
              borderRadius: 100,
              aspectRatio: 1,
            }}
          />
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

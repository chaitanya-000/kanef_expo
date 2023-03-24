import {
  Modal,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Body1, Body2, Heading6 } from "../atoms/Typography";
import { GreenButton } from "../atoms/GreenButton";
import { AntDesign } from "@expo/vector-icons";
import OutsideClickHandler from "react-outside-click-handler";
import Animated from "react-native-reanimated";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

const RewardScreenModal = () => {
  const [uId, setUid] = useState("");
  const [receivedDataPoints, setReceivedDataPoints] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("uId");
      if (value !== null) {
        setUid(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const getPoints = () => {
    axios
      .post("https://kenaf.ie/RewardInfo", {
        uId: JSON.parse(uId),
      })
      .then((response) => {
        console.log(response);
        setReceivedDataPoints(response.data.data);
        setRefreshing(false);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
        setRefreshing(false);
      });
  };

  const claimReward = () => {
    axios
      .post("https://kenaf.ie/ClaimReward", {
        uId: JSON.parse(uId),
        points: receivedDataPoints,
        amount: receivedDataPoints / 100,
      })
      .then((response) => {
        console.log(response);
        getPoints();
        alert(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
    uId && getPoints();
  }, [uId]);

  return (
    <ScrollView
      bounces={true}
      style={styles.container}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={getPoints} />
      }
    >
      <Pressable style={styles.modal}>
        <View style={styles.modal_BrandName}>
          <Text
            style={{ fontSize: responsiveFontSize(2.6), fontWeight: "700" }}
          >
            Total Points
          </Text>
        </View>
        <View style={styles.modal_worthAndBalanceContainer}>
          <View style={styles.modal_worthAndBalanceContainer_pointsWorth}>
            <View
              style={
                styles.modal_worthAndBalanceContainer_pointsWorth_pointsWorthHeading
              }
            >
              <Text
                style={{
                  color: "#828282",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  fontSize: responsiveFontSize(1.5),
                }}
              >
                Points Worth
              </Text>
            </View>
            <View
              style={
                styles.modal_worthAndBalanceContainer_pointsWorth_Totalpoints
              }
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(3.6),
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                {receivedDataPoints} Points
              </Text>
            </View>
          </View>
          <View
            style={
              styles.modal_worthAndBalanceContainer_pointsWorth_DividerLine
            }
          ></View>
          {/* //same code for points balance container */}
          <View style={styles.modal_worthAndBalanceContainer_pointsWorth}>
            <View
              style={
                styles.modal_worthAndBalanceContainer_pointsWorth_pointsWorthHeading
              }
            >
              <Text
                style={{
                  color: "#828282",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  fontSize: responsiveFontSize(1.5),
                }}
              >
                Points Balance
              </Text>
            </View>
            <View
              style={
                styles.modal_worthAndBalanceContainer_pointsWorth_Totalpoints
              }
            >
              <Text
                style={{ fontSize: responsiveFontSize(3.6), fontWeight: "700" }}
              >
                € {receivedDataPoints / 100}
              </Text>
            </View>
          </View>
        </View>

        <GreenButton
          height={"22%"}
          marginTop={"10%"}
          width={"100%"}
          onPress={claimReward}
        >
          <Body2 style={{ color: "white", fontWeight: "800" }}>
            Claim Reward
          </Body2>
        </GreenButton>
      </Pressable>
    </ScrollView>
  );
};

export default RewardScreenModal;

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    display: "flex",
    // alignItems: "center",
    position: "absolute",
    // justifyContent: "center",
    // backgroundColor: "red",
  },
  modal: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(34),
    // borderWidth: 0.2,
    // marginTop: responsiveScreenHeight(30),
    alignItems: "center",
    // justifyContent: "space-between",
    borderRadius: 15,
    padding: "4%",
    backgroundColor: "red",
    // backgroundColor: "#fff",
    shadowColor: "#26ae60ed",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 16.0,

    elevation: 24,
  },
  modal_BrandName: {
    width: "100%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-between",

    // borderWidth: 2,
  },
  modal_worthAndBalanceContainer: {
    width: "100%",
    height: "45%",
    // borderWidth: 2,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#F6F8FA",
    borderWidth: 1,
    borderColor: "#DEE8EF",
    alignSelf: "center",
    borderRadius: 15,
    // paddingHorizontal: "1%",
  },
  modal_worthAndBalanceContainer_pointsWorth: {
    width: "45%",
    height: "70%",
    // borderWidth: 1,
    borderColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  modal_worthAndBalanceContainer_pointsWorth_DividerLine: {
    width: "1%",
    height: "50%",
    backgroundColor: "#D9D9D9",
  },
  modal_worthAndBalanceContainer_pointsWorth_pointsWorthHeading: {
    width: "100%",
    height: "35%",
    // borderWidth: 2,
    alignItems: "center",
    textTransform: "uppercase",
  },
  modal_worthAndBalanceContainer_pointsWorth_Totalpoints: {
    width: "70%",
    height: "90%",
    // borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  modal_balanceIpdated: {
    width: "90%",
    height: "07%",
    // borderWidth: 2,
  },
});

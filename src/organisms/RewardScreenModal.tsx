import {
  Modal,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  RefreshControl,
  Alert,
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
import { Ionicons } from "@expo/vector-icons";
import Navigation from "../Navigation";
import Spinner from "react-native-loading-spinner-overlay/lib";

const RewardScreenModal = ({
  setShowModal,
  receivedDataPoints,
  getPoints,
  uId,
  navigation,
  setUid,
}: any) => {
  const [refreshing, setRefreshing] = useState(false);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const getBankDetails = () => {
    setLoading(true);
    uId &&
      axios
        .post("https://kenaf.ie/BankAccountInfo", {
          userId: JSON.parse(uId),
        })
        .then((response) => {
          setLoading(false);

          console.log(response);
          if (response.data.data.length === 0) {
            setIsFirstTimeUser(true);
          } else {
            setIsFirstTimeUser(false);
          }
        })
        .catch((error) => {
          setLoading(false);

          alert(error.message);
        });
  };

  const claimReward = async () => {
    console.log(isFirstTimeUser);
    if (isFirstTimeUser) {
      Alert.alert("Enter Bank Details First", "", [
        {
          text: "Ok",
          style: "default",
          onPress: () => {
            navigation.navigate("BankDetailsScreen");
            setShowModal(false);
          },
        },
      ]);
    } else {
      axios
        .post("https://kenaf.ie/ClaimReward", {
          uId: JSON.parse(uId),
          points: receivedDataPoints,
          amount: receivedDataPoints / 100,
        })
        .then((response) => {
          getPoints();
          alert(response.data.data);
          setShowModal(false);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  useEffect(() => {
    getBankDetails();
    getPoints();
  }, [isFirstTimeUser]);

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
      <Spinner visible={loading} />
      <View style={styles.modal}>
        <View style={styles.modal_BrandName}>
          <Text
            style={{ fontSize: responsiveFontSize(2.6), fontWeight: "700" }}
          >
            Total Points
          </Text>
          <Ionicons
            name="close-circle-outline"
            size={35}
            color="black"
            onPress={() => setShowModal(false)}
          />
          {/* <FontAwesome5
            name="window-close"
            size={30}
            color="black"
            onPress={() => setShowModal(false)}
          /> */}
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
                {receivedDataPoints}
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
                style={{
                  fontSize: responsiveFontSize(3.6),
                  fontWeight: "700",
                }}
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
            Claim Balance
          </Body2>
        </GreenButton>
      </View>
    </ScrollView>
  );
};

export default RewardScreenModal;

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    display: "flex",
    position: "absolute",
    // justifyContent: "center",
    // backgroundColor: "red",
  },
  modal: {
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(34),
    // borderWidth: 0.1,
    // marginTop: responsiveScreenHeight(30),
    alignItems: "center",
    borderRadius: 15,
    padding: "4%",
    backgroundColor: "#fff",
    // backgroundColor: "red",
    // shadowColor: "#26ae60ed",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 12,
    shadowRadius: 1.0,

    elevation: 30,
    marginBottom: "30%",
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

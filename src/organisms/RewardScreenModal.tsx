import { Modal, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Body1, Heading6 } from "../atoms/Typography";
import { GreenButton } from "../atoms/GreenButton";

const RewardScreenModal = ({ showModal, setShowModal }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.modal_BrandName}>
          <Text
            style={{ fontSize: responsiveFontSize(2.6), fontWeight: "700" }}
            onPress={() => setShowModal(false)}
          >
            Brand Name X
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
                style={{ fontSize: responsiveFontSize(2.2), fontWeight: "700" }}
              >
                10 Points
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
                style={{ fontSize: responsiveFontSize(2.2), fontWeight: "700" }}
              >
                $0.50
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.modal_balanceIpdated}>
          <Text style={{ fontWeight: "500", color: "#828282" }}>
            Balance Updated
          </Text>
        </View>
        <GreenButton height={"20%"} marginTop={"0%"} width={"100%"}>
          <Body1 style={{ color: "white" }}>Login</Body1>
        </GreenButton>
      </View>
    </View>
  );
};

export default RewardScreenModal;

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "red",
  },
  modal: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(34),
    // borderWidth: 2,
    marginTop: responsiveScreenHeight(15),
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 15,
    padding: "4%",
    backgroundColor: "#fff",
  },
  modal_BrandName: {
    width: "100%",
    height: "8%",
    // borderWidth: 2,
  },
  modal_worthAndBalanceContainer: {
    width: "100%",
    height: "30%",
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
    height: "77%",
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
    width: "100%",
    height: "30%",
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

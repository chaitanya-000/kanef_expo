import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AccountSettings from "../molecules/AccountSettings";
import Help from "../molecules/Help";
import ContactUs from "../molecules/ContactUs";
import OpenOnCamera from "../molecules/OpenOnCamera";
import Feedback from "../molecules/FeedBack";
import TermsOfService from "../molecules/TermsOfService";
import PrivacyPolicy from "../molecules/PrivacyPolicy";
import { GreenButton } from "../atoms/GreenButton";
import { Body1 } from "../atoms/Typography";
import { AuthContext } from "../store";
import BankAccountDetails from "../molecules/BankAccountDetails";
import ClaimPoints from "../molecules/ClaimPoints";
import RewardScreenModal from "./RewardScreenModal";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import TotalPoints from "./TotalPoints";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const SettingsOptionContainer = ({ navigation }: any) => {
  const { handleLogout } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [receivedDataPoints, setReceivedDataPoints] = useState(null);
  const [uId, setUid] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isZeroPoints, setIsZeroPoints] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

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
    setRefreshing(true);
    axios
      .post("https://kenaf.ie/RewardInfo", {
        uId: JSON.parse(uId),
      })
      .then((response) => {
        if (response.data.data < 100) {
          setIsZeroPoints(true);
        } else {
          setIsZeroPoints(false);
        }
        setRefreshing(false);
        setReceivedDataPoints(response.data.data);
      })
      .catch((error) => {
        setRefreshing(false);

        alert(error.message);
      });
  };

  const getUserInfo = () => {
    axios
      .post("https://kenaf.ie/appUserInfo", {
        uId: JSON.parse(uId),
      })
      .then((response) => {
        const data = response.data.data[0];
        if (data.Gender) {
          setShowIcon(false);
          console.log("user has updated  before");
        } else {
          console.log("first time user");

          setShowIcon(true);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleRefresh = () => {
    getPoints();
    getUserInfo();
  };

  useEffect(() => {
    getData();
    if (uId) {
      getPoints();
      getUserInfo();
    }
  }, [uId]);
  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          alignItems: "center",
          width: "100%",
          opacity: showModal ? 0.02 : 1,
          backgroundColor: showModal ? "black" : "white",
          height: "125%",
          // paddingBottom: "20%",
        }}
        bounces={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <TotalPoints
          uId={uId}
          setUid={setUid}
          receivedDataPoints={receivedDataPoints}
        />
        <ClaimPoints showModal={showModal} setShowModal={setShowModal} />
        <AccountSettings
          navigation={navigation}
          uId={uId}
          showIcon={showIcon}
        />
        <Help />
        <ContactUs navigation={navigation} />
        <BankAccountDetails navigation={navigation} />
        <Feedback navigation={navigation} />
        <TermsOfService navigation={navigation} />
        <PrivacyPolicy navigation={navigation} />
        <GreenButton
          height={"8%"}
          marginTop={"2%"}
          width={"90%"}
          onPress={handleLogout}
        >
          <Body1 style={{ color: "white" }}>Logout</Body1>
        </GreenButton>
      </ScrollView>
      {showModal && (
        <RewardScreenModal
          showModal={showModal}
          setShowModal={setShowModal}
          receivedDataPoints={receivedDataPoints}
          getPoints={getPoints}
          uId={uId}
          setUid={setUid}
          navigation={navigation}
          isZeroPoints={isZeroPoints}
        />
      )}
    </>
  );
};

export default SettingsOptionContainer;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "orange",
    // marginTop: "16%",
    position: "relative",
    bottom: "8%",
    width: "90%",
    height: "100%",
  },
});

import {
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Body1, Body4 } from "../atoms/Typography";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import HorizontalDividerLine from "../atoms/HorizontalDividerLine";
import { Ionicons } from "@expo/vector-icons";

const Help = ({ navigation }: any) => {
  const [howDoIuse, setHowDoIuse] = useState(false);
  const [retailerDosentOffer, setRetailerDosentOffer] = useState(false);
  const [rewardPoints, setRewardPoints] = useState(false);
  const [redeemBalance, setReedemBalance] = useState(false);
  const [receiveBalance, setReceiveBalance] = useState(false);
  const [remainingBalance, setRemainingBalance] = useState(false);
  const [forwardPoints, setForwardPoints] = useState(false);
  const [pointWorth, setPointWorth] = useState(false);
  const [inbox, setInbox] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [remove, setRemove] = useState(false);
  const [update, setUpdate] = useState(false);
  const [contactIfProblem, setContactIfProblem] = useState(false);
  const [deleteApp, setDeleteApp] = useState(false);
  const [cantFind, setCantFind] = useState(false);

  return (
    <SafeAreaView style={styles.pageContainer}>
      {/* <StatusBar hidden={true} /> */}

      <View
        style={{
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(10),
          // borderWidth: 2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            height: "90%",
            // borderWidth: 2,
            flexDirection: "row",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: "60%",
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
          <Body1 style={{ color: "white", alignSelf: "center" }}>
            Kenaf Privacy Policy
          </Body1>
        </View>
      </View>
      {/* ////////////////////////////////////////////// */}
      <ScrollView
        style={styles.whiteContainer}
        contentContainerStyle={{
          paddingBottom: responsiveScreenHeight(10),
        }}
      >
        <View style={[styles.headerContainer, { marginTop: "0%" }]}>
          <Text style={styles.headerContainer_heading}>
            Frequently asked questions
          </Text>
        </View>
        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setHowDoIuse(!howDoIuse)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>
              How do I use the Kenaf App?
            </Text>
            <AntDesign
              name={howDoIuse ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {howDoIuse && (
            <Text style={styles.content}>
              When the Kenaf system is installed at the retailer’s point of
              sales. Simply scan the QR Code Displayed on the pop-up screen. To
              claim points on exiting paper or e-receipts simply take a picture
              and upload it through the app.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}

        <TouchableOpacity
          style={[styles.infoContainer]}
          onPress={() => setRetailerDosentOffer(!retailerDosentOffer)}
        >
          <View style={styles.infoContainerName_big}>
            <Text style={styles.contentHeader}>
              What if the retailer doesn’t offer Kenaf solution?
            </Text>
            <AntDesign
              name={retailerDosentOffer ? "down" : "right"}
              size={15}
              color="black"
              style={{ marginLeft: "12%" }}
            />
          </View>
          {retailerDosentOffer && (
            <Text style={styles.content}>
              Accept the paper receipt, then upload it to the app using the
              camera option. While not reducing paper waste, this keeps all
              receipts in one place, helping consumers stay organized.
            </Text>
          )}
        </TouchableOpacity>
        {/* <HorizontalDividerLine /> */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerContainer_heading}>My Points</Text>
        </View>
        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setRewardPoints(!rewardPoints)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>What are Reward Points?</Text>
            <AntDesign
              name={rewardPoints ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {rewardPoints && (
            <Text style={styles.content}>
              Reward Points is an exclusive feature sent through the Kenaf App.
              Once your account is activated you will start receiving points
              which can be later redeemed through the app.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}

        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setReedemBalance(!redeemBalance)}
        >
          <View
            style={[
              styles.infoContainerName,
              {
                width: "90%",
                height: responsiveScreenHeight(6),
                // borderWidth: 1,
              },
            ]}
          >
            <Text style={styles.contentHeader}>
              How can I redeem my Point balance?
            </Text>
            <AntDesign
              name={redeemBalance ? "down" : "right"}
              size={15}
              color="black"
              style={{ marginLeft: "26%" }}
            />
          </View>
          {redeemBalance && (
            <Text style={styles.content}>
              You can redeem your point balance through the App. By simply
              putting in your bank details in the settings menu then going to
              “claim balance “option.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}

        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setReceiveBalance(!receiveBalance)}
        >
          <View style={styles.infoContainerName_big}>
            <Text style={styles.contentHeader}>
              How long does it take receive balance in my bank account?
            </Text>
            <AntDesign
              name={receiveBalance ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {receiveBalance && (
            <Text style={styles.content}>
              It can take up to 2-3 working days.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setRemainingBalance(!remainingBalance)}
        >
          <View style={styles.infoContainerName_big}>
            <Text style={styles.contentHeader}>
              How do I know my remaining Balance?
            </Text>
            <AntDesign
              name={remainingBalance ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {remainingBalance && (
            <Text style={styles.content}>
              The remaining balance of your Reward Points can be viewed on
              settings page
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setForwardPoints(!forwardPoints)}
        >
          <View style={styles.infoContainerName_big}>
            <Text style={styles.contentHeader}>
              Can I forward Offers/Points to friends and Family?
            </Text>
            <AntDesign
              name={forwardPoints ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {forwardPoints && (
            <Text style={styles.content}>
              These offers/Points are just exclusively for your account? But
              share the app so they can receive their own pints & offers.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}

        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setPointWorth(!pointWorth)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>How much is 1 point worth?</Text>
            <AntDesign
              name={pointWorth ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {pointWorth && (
            <Text style={styles.content}>1 point is worth 1€.</Text>
          )}
        </TouchableOpacity>
        {/* <HorizontalDividerLine /> */}
        {/* ///////////////////////////////////////////////////////// */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerContainer_heading}>
            Inbox & Notifications
          </Text>
        </View>
        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setInbox(!inbox)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>What is the Inbox?</Text>
            <AntDesign
              name={inbox ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {inbox && (
            <Text style={styles.content}>
              This is where you'll find marketing activities, promotions, and
              upcoming events from your favorite retailers.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setNotifications(!notifications)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>What are Notifications?</Text>
            <AntDesign
              name={notifications ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {notifications && (
            <Text style={styles.content}>
              Notifications help your experience when using Kenaf App. It's
              personalized and convenient by keeping you updated about offers,
              events and more.
            </Text>
          )}
        </TouchableOpacity>
        {/* <HorizontalDividerLine /> */}
        {/* ///////////////////////////////////////////////////////// */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerContainer_heading}>General</Text>
        </View>
        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setRemove(!remove)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>How do I remove the App?</Text>
            <AntDesign
              name={remove ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {remove && (
            <Text style={styles.content}>
              You can simply remove the Kenaf App by deleting it from your
              phone.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setUpdate(!update)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>How do I update the App?</Text>
            <AntDesign
              name={update ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {update && (
            <Text style={styles.content}>
              You will be notified if an update is available through your Play
              Store/App store
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////// */}

        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setContactIfProblem(!contactIfProblem)}
        >
          <View style={styles.infoContainerName_big}>
            <Text style={styles.contentHeader}>
              Who do I contact if I have problems with the Kenaf App?
            </Text>
            <AntDesign
              name={contactIfProblem ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {contactIfProblem && (
            <Text style={styles.content}>
              Get in contact with our customer care team by contacting through
              email or phone found in the setting menu.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setDeleteApp(!deleteApp)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>
              How do I delete my Kenaf account?
            </Text>
            <AntDesign
              name={deleteApp ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {deleteApp && (
            <Text style={styles.content}>
              You can delete your Kenaf account at the bottom of Kenaf settings
              menu.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setCantFind(!cantFind)}
        >
          <View style={styles.infoContainerName_big}>
            <Text style={styles.contentHeader}>
              What if I can’t find my store in store menu?
            </Text>
            <AntDesign
              name={cantFind ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {cantFind && (
            <Text style={styles.content}>
              If you can’t find your store, you can simply add it in the camera
              tab.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}

        <View style={styles.infoContainer}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              height: responsiveScreenHeight(6),
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.contentHeader}>
              Please reach out using the provided contact Information
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "400",
              lineHeight: 25,
              fontSize: responsiveFontSize(2),
              marginTop: "3%",
            }}
          >
            customer.service@kenaf.ie
          </Text>
        </View>
        <HorizontalDividerLine />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Help;

const styles = StyleSheet.create({
  pageContainer: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    backgroundColor: "#121f27",
    alignItems: "center",
  },
  pageName: {
    width: "100%",
    height: "12%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  whiteContainer: {
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: "6%",
    backgroundColor: "white",
  },
  content: {
    fontWeight: "400",
    lineHeight: 25,
    fontSize: responsiveFontSize(2),
    marginTop: "3%",
  },
  contentHeader: {
    fontWeight: "600",
    lineHeight: 25,
    fontSize: responsiveFontSize(2.5),
  },
  infoContainer: {
    width: "100%",

    // borderWidth: 2,
    marginTop: "7%",
    marginBottom: "3%",
    // height: responsiveScreenHeight(30),
  },
  infoContainerName: {
    width: "100%",
    flexDirection: "row",
    height: responsiveScreenHeight(4),
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 2,
  },

  infoContainerName_big: {
    width: "90%",
    height: responsiveScreenHeight(6),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    height: "02%",
    // alignItems: "center",
    justifyContent: "center",
    marginTop: "7%",
    // borderWidth: 1,
  },
  headerContainer_heading: {
    fontSize: responsiveFontSize(3),
    fontWeight: "600",
    lineHeight: responsiveScreenHeight(3),
    color: "green",
    // borderWidth: 1,
  },
});

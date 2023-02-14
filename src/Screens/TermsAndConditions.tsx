import {
  SafeAreaView,
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

const TermsAndConditions = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showEligibility, setShowEligibility] = useState(false);
  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.pageName}>
        <Body1 style={{ color: "white", alignSelf: "center" }}>
          Terms & Conditions
        </Body1>
      </View>
      {/* ////////////////////////////////////////////// */}
      <ScrollView
        style={styles.whiteContainer}
        contentContainerStyle={{
          //   height: responsiveScreenHeight(160),
          paddingBottom: responsiveScreenHeight(10),
        }}
      >
        <Text style={styles.content}>
          These terms and conditions (the "Terms") govern your access to and use
          of the Kenaf website, mobile application, and related services (the
          "Service") operated by Kenaf ("us", "we", "our"). By accessing or
          using the Service, you agree to be bound by these Terms. If you do not
          agree to all the terms and conditions of this agreement, then you may
          not access or use the Service.
        </Text>
        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setShowEligibility(!showEligibility)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>
              Eligibility to use the Service
            </Text>
            <AntDesign
              name={showEligibility ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {showEligibility && (
            <Text style={styles.content}>
              By using the Service, you represent and warrant that you are at
              least 13 years of age and have read and agree to be bound by these
              Terms. If you are under 13 years of age, you are not permitted to
              use the Service. Kenaf assumes no responsibility for any
              liabilities related to age misrepresentation.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setShowPrivacy(!showPrivacy)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>Privacy & Policy</Text>
            <AntDesign
              name={showPrivacy ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {showPrivacy && (
            <Text style={styles.content}>
              In accordance with Irish and EU data protection laws, Kenaf ("we",
              "us", or "our") recognizes the importance of protecting the
              privacy and security of our users' personal data. Our receipt
              management services allow users to capture, track, and store
              expenditure receipts, which may be uploaded through QR code scans
              and/or mobile applications. This Privacy Policy applies to all
              platforms through which our services can be accessed, as well as
              any data collected using these platforms. This policy may be
              amended from time to time, particularly in response to changes in
              relevant legislation or as we expand our services. We encourage
              users to check this page regularly to stay informed about our
              privacy practices. If you do not agree with this Privacy Policy,
              we request that you do not use our services. This Privacy Policy
              outlines how Kenaf handles personal data collected when using our
              services. It does not apply to external websites or individuals
              not involved in the management of our website. In accordance with
              Irish and EU data protection laws, users have the right to request
              access to, correction of, or deletion of their personal data. They
              may also contact us if they believe we are no longer entitled to
              use their personal data or if they have any other questions about
              how their personal information is used. Kenaf will handle such
              requests in accordance with all applicable data protection laws.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndConditions;

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
    backgroundColor: "white",
    width: "100%",
    // height: responsiveScreenHeight(100),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: "6%",
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
    marginTop: "8%",
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
});

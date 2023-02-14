import {
  Linking,
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
  const [showIntellectual, setShowIntellectual] = useState(false);
  const [showAccounts, setShowAccounts] = useState(false);
  const [showApplicable, setShowApplicable] = useState(false);
  const [showDisputes, setShowDisputes] = useState(false);
  const [showIndemnification, setShowIndemnification] = useState(false);
  const [showLimitation, setShowLimitation] = useState(false);
  const [showModification, setShowModification] = useState(false);
  const [showReachOut, setShowReachOut] = useState(false);

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
        {/* ///////////////////////////////////////////////////////// */}

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
              Please review our{" "}
              {
                <Text
                  style={{ color: "blue" }}
                  onPress={() => Linking.openURL("http://kenaf.ie/TandC")}
                >
                  (Privacy Policy){" "}
                </Text>
              }{" "}
              to understand our practices regarding the collection and use of
              your personal data.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}

        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setShowIntellectual(!showIntellectual)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>Intellectual Property</Text>
            <AntDesign
              name={showIntellectual ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {showIntellectual && (
            <Text style={styles.content}>
              All materials, products, and services provided on this website,
              including all copyrights, trade secrets, trademarks, patents, and
              other intellectual property, are the property of Kenaf, its
              affiliates, directors, officers, employees, agents, suppliers, or
              licensors. You agree not to reproduce or redistribute the Kenaf's
              intellectual property in any way, including electronically,
              digitally, or through new trademark registrations. By uploading or
              publishing content on the Service, you grant Kenaf a royalty-free,
              non-exclusive license to display, use, copy, transmit, and
              broadcast such content. In the event of any claims or disputes
              regarding intellectual property, you agree to contact Kenaf to
              resolve the issue.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setShowAccounts(!showAccounts)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>Accounts and Registration</Text>
            <AntDesign
              name={showAccounts ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {showAccounts && (
            <Text style={styles.content}>
              As a user of the Service, you may be required to register and
              provide certain personal information. You are responsible for
              ensuring the accuracy of this information and for maintaining the
              security of your account and password. You are also responsible
              for all activities that occur under your account or password. If
              you suspect any security issues with your account, please inform
              us immediately so we can address them. We reserve the right to
              terminate accounts, edit or remove content, and cancel orders at
              our sole discretion.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setShowApplicable(!showApplicable)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>Applicable Law</Text>
            <AntDesign
              name={showApplicable ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {showApplicable && (
            <Text style={styles.content}>
              By accessing the Service, you, the user, acknowledge and agree
              that the laws of Ireland and the European Union shall apply to
              these Terms and any disputes that may arise between you and Kenaf,
              or between Kenaf and any of its business partners or associates,
              without regard to principles of conflict of laws. You further
              agree that any such disputes shall be governed by the laws of
              Ireland and the European Union
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setShowDisputes(!showDisputes)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>Settling Disputes</Text>
            <AntDesign
              name={showDisputes ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {showDisputes && (
            <Text style={styles.content}>
              Any dispute arising from or in connection with your visit to the
              website or the purchase of products from Kenaf shall be resolved
              through arbitration by the state or federal court of Ireland, and
              you, the user, consent to the exclusive jurisdiction and venue of
              such courts.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setShowIndemnification(!showIndemnification)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>Indemnification</Text>
            <AntDesign
              name={showIndemnification ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {showIndemnification && (
            <Text style={styles.content}>
              You, the user, agree to indemnify Kenaf and its affiliates and
              hold Kenaf harmless against all legal claims, demands, or actions
              that may arise from your use or misuse of the services provided by
              Kenaf. Kenaf reserves the right to select its own legal counsel in
              the event of any such legal claims, demands, or actions
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setShowLimitation(!showLimitation)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>Limitation Of Liability</Text>
            <AntDesign
              name={showLimitation ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {showLimitation && (
            <Text style={styles.content}>
              Kenaf shall not be held liable for any damages or losses that may
              arise from the misuse of the website by you, the user. This
              limitation on liability shall apply to all damages or losses,
              whether direct, indirect, incidental, consequential, or punitive,
              and regardless of whether such damages or losses are foreseeable
              or foreseeable.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setShowModification(!showModification)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>Modification Of Terms</Text>
            <AntDesign
              name={showModification ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {showModification && (
            <Text style={styles.content}>
              Kenaf reserves the right to alter, amend, or modify this Agreement
              at its sole discretion and without prior notice to you, the user.
              Any such changes to this Agreement shall be communicated to you
              via electronic mail. This Agreement, as amended from time to time,
              shall constitute the sole and exclusive understanding and
              agreement between Kenaf and you with respect to the use of the
              website, and shall supersede and replace all prior agreements or
              understandings, whether written or oral, between the parties with
              respect to such use foreseeable.
            </Text>
          )}
        </TouchableOpacity>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

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
              color: "blue",
            }}
            onPress={() => Linking.openURL("http://google.com")}
          >
            customer.service@kenaf.ie
          </Text>
        </View>
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
    // borderWidth: 2,
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

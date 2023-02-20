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

const PrivacyPolicy = () => {
  const [KenafPrivacyPolicy, setKenafPrivacyPolicy] = useState(false);
  const [privacyProtectionPolicy, setPrivacyProtectionPolicy] = useState(false);
  const [useOfPersonalData, setUseOfPersonalData] = useState(false);
  const [personalDataSecurity, setPersonalDataSecurity] = useState(false);
  const [linksToExternalWebsites, setLinksToExternalWebsites] = useState(false);
  const [sharingDataWithThirdParties, setSharingDataWithThirdParties] =
    useState(false);
  const [cookies, setCookies] = useState(false);
  const [updatesToPrivacyPolicy, setUpdatesToPrivacyPolicy] = useState(false);
  const [consumerRights, setConsumerRights] = useState(false);

  return (
    <SafeAreaView style={styles.pageContainer}>
      {/* <StatusBar hidden={true} /> */}

      <View style={styles.pageName}>
        <Body1 style={{ color: "white", alignSelf: "center" }}>
          Kenaf Privacy Policy
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
        {/* ///////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setKenafPrivacyPolicy(!KenafPrivacyPolicy)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>Kenaf Privacy Policy</Text>
            <AntDesign
              name={KenafPrivacyPolicy ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {KenafPrivacyPolicy && (
            <Text style={styles.content}>
              In accordance with Irish and EU data protection laws, Kenaf ("we",
              "us", or "our") recognizes the importance of protecting the
              privacy and security of our users' personal data. Our receipt
              management services allow users to capture, track, and store
              expenditure receipts, which may be uploaded through QR code scans
              and/or mobile applications.{"\n"}
              {"\n"} This Privacy Policy applies to all platforms through which
              our services can be accessed, as well as any data collected using
              these platforms. This policy may be amended from time to time,
              particularly in response to changes in relevant legislation or as
              we expand our services. We encourage users to check this page
              regularly to stay informed about our privacy practices.{"\n"}
              {"\n"}
              If you do not agree with this Privacy Policy, we request that you
              do not use our services.This Privacy Policy outlines how Kenaf
              handles personal data collected when using our services. It does
              not apply to external websites or individuals not involved in the
              management of our website. In accordance with Irish and EU data
              protection laws, users have the right to request access to,
              correction of, or deletion of their personal data. They may also
              contact us if they believe we are no longer entitled to use their
              personal data or if they have any other questions about how their
              personal information is used. Kenaf will handle such requests in
              accordance with all applicable data protection laws.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////// */}

        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setPrivacyProtectionPolicy(!privacyProtectionPolicy)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>
              Kenaf Privacy Protection Policy
            </Text>
            <AntDesign
              name={privacyProtectionPolicy ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {privacyProtectionPolicy && (
            <Text style={styles.content}>
              The purpose of this Privacy Protection Policy is to inform users
              of the Kenaf services about the handling of personal
              identification data collected during use of our services. It is
              important to note that this policy does not extend to linked
              websites outside of Kenaf, nor does it apply to individuals not
              involved in the management of our website. The provisions outlined
              in this policy govern the collection, use, and protection of
              personal identification data in relation to the Kenaf services.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setUseOfPersonalData(!useOfPersonalData)}
        >
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
              Collection, processing, and use of Personal Data
            </Text>
            <AntDesign
              name={useOfPersonalData ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {useOfPersonalData && (
            <Text style={styles.content}>
              Upon accessing the website www.kenaf.ie or availing oneself of the
              functional services provided by Kenaf, such as the Android and IOS
              mobile application, it may be necessary for Kenaf to collect and
              process the personal data of the user. Such personal data shall
              only be used for the specific purposes for which it was collected
              and shall not be utilized for any other purposes without the
              written consent of the user. Kenaf shall retain the name, email
              address, contact information, and digital receipts uploaded by the
              user through the use of the mobile application. During the course
              of normal browsing, the server may record certain actions for
              internal reference, including the IP address of the connected
              device, the time of use, the browser utilized, and browsing and
              clicking data records, for the purpose of improving the services
              provided. These records shall not be made public.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setPersonalDataSecurity(!personalDataSecurity)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>Personal Data Security</Text>
            <AntDesign
              name={personalDataSecurity ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {personalDataSecurity && (
            <Text style={styles.content}>
              The host of Kenaf has implemented various information security
              measures, such as firewalls, anti-virus systems, and other
              necessary security measures, to protect the website, mobile
              application, and the personal data of users. Strict measures have
              been adopted to ensure the protection of such data, and access to
              personal information is restricted to authorized personnel only.
              Data processing personnel have signed confidentiality agreements,
              and any breach of such confidentiality obligations shall be
              punishable under relevant laws. In cases where it is necessary to
              engage third parties to provide services for business purposes,
              Kenaf shall also impose strict confidentiality obligations on such
              parties and take necessary measures to ensure compliance with such
              obligations.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setLinksToExternalWebsites(!linksToExternalWebsites)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>Links to External Websites</Text>
            <AntDesign
              name={linksToExternalWebsites ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {linksToExternalWebsites && (
            <Text style={styles.content}>
              The web pages of Kenaf may contain links to other websites, and it
              is also possible to access other websites through links provided
              on this website. However, the privacy protection policy of this
              website does not extend to linked websites, and users must refer
              to the privacy protection policies of such linked websites for
              information on the handling of personal data.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() =>
            setSharingDataWithThirdParties(!sharingDataWithThirdParties)
          }
        >
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
              Sharing Personal Data with Third Parties
            </Text>
            <AntDesign
              name={sharingDataWithThirdParties ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {sharingDataWithThirdParties && (
            <Text style={styles.content}>
              Policy on sharing personal data with third parties Kenaf will not
              disclose, exchange, rent, or sell any personal information to
              other individuals, groups, private companies, or public agencies,
              except in cases where there is a legal basis or contractual
              obligation. The following circumstances justify the sharing of
              personal information as outlined in the preceding paragraph:{"\n"}
              {"\n"}
              1. With written consent from the individual.{"\n"}2. As required
              by law.{"\n"}3. To protect the individual's life, physical safety,
              freedom, or property.{"\n"}4. For statistical or academic research
              purposes in the public interest, carried out in collaboration with
              public agencies or academic research institutions, with the data
              processed or collected by the provider in a way that does not
              identify a specific individual.{"\n"}5. When the individual's
              behavior on the Kenaf platform violates the terms of service, or
              may harm the rights of the website and other users, or cause harm
              to any person, and the website management unit requires the
              analysis and disclosure of personal information for the purpose of
              identification, contact, or legal action.{"\n"}6. When the website
              engages a third party to assist in the collection, processing, or
              use of personal data, the website will oversee and manage the
              third party or individual to ensure compliance with data
              protection requirements.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setCookies(!cookies)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>Cookies</Text>
            <AntDesign
              name={cookies ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {cookies && (
            <Text style={styles.content}>
              To enhance the user experience, Kenaf may place and access cookies
              on your computer. If you do not wish to accept the writing of
              cookies, you can adjust the privacy settings in the browser of
              your choice. Setting the privacy level to high will prevent the
              writing of cookies, but may result in certain functions of the
              website not functioning properly.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setUpdatesToPrivacyPolicy(!updatesToPrivacyPolicy)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>Updates to Privacy policy</Text>
            <AntDesign
              name={updatesToPrivacyPolicy ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {updatesToPrivacyPolicy && (
            <Text style={styles.content}>
              Amendment of privacy protection policy Kenaf reserves the right to
              revise its privacy protection policy at any time to meet changing
              needs and requirements. Any updates to the policy will be
              published on the website.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => setConsumerRights(!consumerRights)}
        >
          <View style={styles.infoContainerName}>
            <Text style={styles.contentHeader}>ConsumerRights</Text>
            <AntDesign
              name={consumerRights ? "down" : "right"}
              size={15}
              color="black"
            />
          </View>
          {consumerRights && (
            <Text style={styles.content}>
              Your rights As an individual, you have the right to review the
              personal information that Kenaf has collected about you. This
              information is available in your profile, and you may request
              access to or deletion of this information, or request that it be
              corrected, by contacting us. You may also contact us if you
              believe that Kenaf is no longer entitled to use your personal
              data, or if you have any other questions regarding the use of your
              personal information. Please email or write to us using the
              contact details provided below. Kenaf will handle all requests in
              accordance with applicable EU and national data protection laws.
            </Text>
          )}
        </TouchableOpacity>
        <HorizontalDividerLine />

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

export default PrivacyPolicy;

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

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Ionicons } from "@expo/vector-icons";
import { Body1 } from "../atoms/Typography";
import { TextInput } from "react-native-gesture-handler";
import SolidGreenButton from "../atoms/SolidGreenButton";
import { GreenButton } from "../atoms/GreenButton";

const BankDetailsScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.nameBackButtonContainer}>
        <View style={styles.nameBackButtonChild}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
          <Body1 style={{ color: "white", alignSelf: "center" }}>
            Bank Details
          </Body1>
        </View>
      </View>
      <View style={styles.whiteRoundedContainer}>
        <View style={styles.labelAndTextInput}>
          <Body1 style={{ fontWeight: "600" }}>Name</Body1>
          <TextInput style={styles.textInput} value="jaknkjas" />
        </View>
        <View style={styles.labelAndTextInput}>
          <Body1 style={{ fontWeight: "600" }}>IBAN</Body1>

          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.labelAndTextInput}>
          <Body1 style={{ fontWeight: "600" }}>BIC</Body1>

          <TextInput style={styles.textInput} />
        </View>
        <GreenButton
          height={"8%"}
          marginTop={"35%"}
          width={"98%"}
          style={{ marginBottom: responsiveScreenHeight(20) }}
        >
          <Body1 style={{ color: "white" }}>Save</Body1>
        </GreenButton>
      </View>
    </SafeAreaView>
  );
};

export default BankDetailsScreen;

const styles = StyleSheet.create({
  pageContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    alignItems: "center",
    backgroundColor: "#121f27",
  },
  nameBackButtonContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  nameBackButtonChild: {
    width: "90%",
    height: "90%",
    flexDirection: "row",
    alignItems: "center",
  },

  whiteRoundedContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 30,
    padding: "10%",
  },
  textInput: {
    width: "100%",
    height: "60%",
    borderRadius: 15,
    backgroundColor: "#F6F8FA",
    borderColor: "#DEE8EF",
    borderWidth: 1,
    paddingHorizontal: "5%",
    fontSize: responsiveScreenFontSize(2.4),
  },
  labelAndTextInput: {
    width: "100%",
    height: "14%",
    justifyContent: "space-between",
    marginTop: "10%",
  },
  backButton: {
    height: "60%",
    width: "13%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginRight: "15%",
    borderWidth: 1,
    borderColor: "rgba(222, 232, 239, 0.1)",
  },
});

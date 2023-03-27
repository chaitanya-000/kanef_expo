import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Ionicons } from "@expo/vector-icons";
import { Body1, Body2 } from "../atoms/Typography";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { GreenButton } from "../atoms/GreenButton";
import { TextInput } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay/lib";

const BankDetailsScreen = ({ navigation }: any) => {
  const initialValues = {
    bankName: "",
    IBAN: "",
    BIC: "",
  };
  const [inputs, setInputs] = useState<any>(initialValues);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  const [bankData, setBankData] = useState(null);
  const [userID, setUserId] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("uId");
      if (value !== null) {
        const uid = value;
        setUserId(uid);
      }
    } catch (e) {
      // error reading value
    }
  };

  const getBankDetails = () => {
    setLoading(true);
    axios
      .post("https://kenaf.ie/BankAccountInfo", {
        userId: JSON.parse(userID),
      })
      .then((response) => {
        setLoading(false);

        if (response.data.data.length === 0) {
          setIsFirstTimeUser(true);
        } else {
          setBankData(response.data.data[0]);
        }
      })
      .catch((error) => {
        setLoading(false);

        alert(error.message);
      });
  };

  const handleOnchange = (name: any, value: any) => {
    setInputs((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const sendData = () => {
    if (inputs.bankName && inputs.IBAN) {
      setLoading(true);

      axios
        .post("https://kenaf.ie/BankAccount", {
          // userId: userID.replace("", " "),
          userId: JSON.parse(userID),
          bankName: inputs.bankName,
          IBAN: inputs.IBAN,
          BIC: inputs.BIC,
        })
        .then((response) => {
          setLoading(false);

          alert(response.data.data);
        })
        .catch((error) => {
          setLoading(false);

          alert(error.message);
        });
    } else {
      alert("Enter BankName and IBAN");
    }
  };
  const updateData = () => {
    navigation.navigate("UpdateBankDetails", {
      userID: userID,
    });
  };

  useEffect(() => {
    getData();
    userID && getBankDetails();
  }, [userID, isFirstTimeUser]);

  return (
    <>
      <KeyboardAvoidingView
        style={styles.pageContainer}
        behavior="height"
        keyboardVerticalOffset={-280}
      >
        <Spinner visible={loading} />
        <View style={styles.nameBackButtonContainer}>
          <View style={styles.nameBackButtonChild}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate("Settings")}
            >
              <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
            <View style={styles.screenNameContainer}>
              <Body1 style={{ color: "white", alignSelf: "center" }}>
                Bank Details
              </Body1>
            </View>
          </View>
        </View>
        <View style={styles.whiteRoundedContainer}>
          {isFirstTimeUser && (
            <>
              <View style={styles.labelAndText}>
                <Body1 style={{ fontWeight: "600" }}>Name</Body1>

                <TextInput
                  style={styles.textInput}
                  onChangeText={(value: any) =>
                    handleOnchange("bankName", value)
                  }
                  placeholder="Enter details"
                />
              </View>
              <View style={styles.labelAndText}>
                <Body1 style={{ fontWeight: "600" }}>IBAN</Body1>

                <TextInput
                  style={styles.textInput}
                  onChangeText={(value: any) => handleOnchange("IBAN", value)}
                  placeholder="Enter details"
                />
              </View>
              <View style={styles.labelAndText}>
                <Body1 style={{ fontWeight: "600" }}>BIC</Body1>

                <TextInput
                  style={styles.textInput}
                  onChangeText={(value: any) => handleOnchange("BIC", value)}
                  placeholder="Enter details"
                />
              </View>
              <GreenButton
                height={"8%"}
                marginTop={"35%"}
                width={"98%"}
                style={{ marginBottom: responsiveScreenHeight(20) }}
                onPress={sendData}
              >
                <Body1 style={{ color: "white" }}>Save</Body1>
              </GreenButton>
            </>
          )}
          {!isFirstTimeUser && (
            <>
              <View style={styles.labelAndText}>
                <Body2 style={{ fontWeight: "600" }}>Bank Name</Body2>
                <View style={styles.Text}>
                  <Body2 style={{ fontWeight: "300" }}>
                    {bankData?.bankName}
                  </Body2>
                </View>
              </View>
              <View style={styles.labelAndText}>
                <Body2 style={{ fontWeight: "600" }}>IBAN</Body2>
                <View style={styles.Text}>
                  <Body2 style={{ fontWeight: "300" }}> {bankData?.IBAN}</Body2>
                </View>
              </View>
              <View style={styles.labelAndText}>
                <Body2 style={{ fontWeight: "600" }}>BIC</Body2>
                <View style={styles.Text}>
                  <Body2 style={{ fontWeight: "300" }}> {bankData?.BIC}</Body2>
                </View>
              </View>
              <View style={styles.LineDivider}></View>
              <GreenButton
                height={"6%"}
                marginTop={"4%"}
                width={"40%"}
                style={{ alignSelf: "center" }}
                onPress={updateData}
              >
                <Body1 style={{ color: "white" }}>Update</Body1>
              </GreenButton>
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </>
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
    height: "12%",
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    marginBottom: "3%",
  },
  nameBackButtonChild: {
    width: "90%",
    height: "90%",
    flexDirection: "row",
    alignItems: "flex-end",
    // borderWidth: 1,
  },

  whiteRoundedContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 30,
    padding: "5%",
  },
  screenNameContainer: {
    width: "35%",
    height: "70%",
    marginLeft: "5%",
    alignSelf: "center",
    justifyContent: "flex-end",
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

  backButton: {
    height: "50%",
    width: "13%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginRight: "15%",
    borderWidth: 1,
    borderColor: "rgba(222, 232, 239, 0.1)",
  },
  labelAndText: {
    width: "100%",
    height: "12%",
    justifyContent: "space-between",
    marginTop: "6%",
  },

  Text: {
    height: "70%",
    width: "100%",
    backgroundColor: "#F6F8FA",
    borderColor: "#DEE8EF",
    borderWidth: 0.5,
    paddingHorizontal: "5%",
    borderRadius: 10,
    fontSize: responsiveScreenFontSize(2.4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  LineDivider: {
    width: "100%",
    height: responsiveScreenHeight(0.1),
    backgroundColor: "#E0E0E0",
    marginTop: "10%",
  },
  UpdateButton: {
    width: "100%",
    height: "8%",
    backgroundColor: "red",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

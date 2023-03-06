import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Alert,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Body1, Body2, Body3, Heading2, Heading5 } from "../atoms/Typography";
import { GreenButton } from "../atoms/GreenButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

const FeedbackScreen = ({ navigation }: any) => {
  const [userID, setUserId] = useState("");

  const initialValues = {
    tellUs: "",
    Problem: "",
  };
  const [inputs, setInputs] = useState(initialValues);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("uId");
      if (value !== null) {
        setUserId(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  const sendFeedback = () => {
    inputs.Problem && inputs.tellUs
      ? axios
          .post("https://kenaf.ie/feedback", {
            tellUs: inputs.tellUs,
            Problem: inputs.Problem,
            uId: userID,
          })
          .then((res) => {
            Alert.alert(res.data.data);
          })
          .catch((error) => {})
      : Alert.alert("We would love to hear from you. inputs cant be empty");
  };

  useEffect(() => {
    getData();
  }, [userID]);

  const handleOnchange = (text: any, input: any) => {
    setInputs((prevState: any) => ({ ...prevState, [input]: text }));
  };
  return (
    <KeyboardAwareScrollView>
      <StatusBar hidden={true} />
      <View style={styles.screenContainer}>
        <View style={styles.screenName}>
          <View
            style={{
              width: "90%",
              height: "60%",
              // borderWidth: 2,
              flexDirection: "row",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                height: "72%",
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
        <KeyboardAwareScrollView
          contentContainerStyle={styles.whiteRoundedContainer}
        >
          <Body2
            style={{
              alignSelf: "flex-start",
              marginTop: responsiveScreenHeight(2),
            }}
          >
            Tell us how we can improve our app?
          </Body2>
          <TextInput
            style={styles.textArea}
            multiline={true}
            onChangeText={(text) => handleOnchange(text, "tellUs")}
          />
          <Body2
            style={{
              alignSelf: "flex-start",
              marginTop: responsiveScreenHeight(5),
            }}
          >
            Report a Problem
          </Body2>
          <TextInput
            style={styles.textArea}
            multiline={true}
            onChangeText={(text) => handleOnchange(text, "Problem")}
          />
          <GreenButton
            height={"7%"}
            marginTop={"0%"}
            width={"98%"}
            style={{
              marginTop: responsiveScreenHeight(15),
            }}
            onPress={sendFeedback}
          >
            <Body1 style={{ color: "white" }}>Save</Body1>
          </GreenButton>
        </KeyboardAwareScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  screenContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    alignItems: "center",
    backgroundColor: "#121f27",
  },
  screenName: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(12),
    // borderWidth: 2,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  whiteRoundedContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(98),
    backgroundColor: "white",
    marginTop: responsiveScreenHeight(2),
    borderRadius: 35,
    padding: responsiveScreenHeight(3),
    alignItems: "center",
  },
  suggestion: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(30),
    borderWidth: 2,
  },
  textArea: {
    width: "100%",
    height: "20%",
    borderWidth: 1,
    fontSize: responsiveFontSize(3),
    borderRadius: 10,
    backgroundColor: "#F6F8FA",
    borderColor: "#DEE8EF",
    marginTop: responsiveScreenHeight(2),
    paddingHorizontal:
      Platform.OS === "android"
        ? responsiveScreenWidth(3)
        : responsiveScreenWidth(6),
    paddingVertical:
      Platform.OS === "android"
        ? responsiveScreenHeight(6)
        : responsiveScreenHeight(9),
  },
});

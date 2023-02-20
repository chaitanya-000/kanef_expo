import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  Platform,
  Alert,
  StatusBar,
  Linking,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ScreenContainer } from "../styledComponents/Receipts,Reward,BillPage";
import { WhiteRoundedContainer } from "../styledComponents/Receipts,Reward,BillPage";
import { Picker } from "@react-native-picker/picker";
import {
  Body1,
  Body2,
  Body3,
  Body5,
  Body6,
  Heading5,
  Heading6,
} from "../atoms/Typography";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import EmailAddress from "../organisms/EmailAddress";
import {
  FullWidthContainer,
  FullWidthTextInputBox,
} from "../molecules/FullWidthInputContainer";
import {
  InputContainerWithLabel,
  Label,
  TextInputBox,
} from "../molecules/TextInputWithLabel";
import { SplitContainer } from "../atoms/InputContainer";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Gender from "../organisms/Gender";
import { GreenButton } from "../atoms/GreenButton";
import DropDownPicker from "react-native-dropdown-picker";
import ModalDropdown from "react-native-modal-dropdown";
import axios from "axios";
import { AuthContext } from "../store";
import { Dropdown } from "react-native-element-dropdown";
import MaskInput, { Masks } from "react-native-mask-input";
import AsyncStorage from "@react-native-async-storage/async-storage";
``;

const ContactUsScreen = () => {
  // const [userID, setUserId] = useState("");
  // const initialValues = {
  //   email: "",
  //   phone: "",
  // };
  // const [inputs, setInputs] = useState<any>(initialValues);

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("uId");
  //     if (value !== null) {
  //       setUserId(value);
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, [userID]);

  // const sendData = () => {
  //   inputs.email && inputs.phone
  //     ? axios
  //         .post("https://kenaf.ie/appUserUpdate", {
  //           uId: inputs.uID,
  //           email: inputs.email,
  //           phone: inputs.phone,
  //         })
  //         .then((response) => {
  //           setInputs(initialValues);
  //           Alert.alert(response.data.message);
  //         })
  //         .catch((error) => {})
  //     : Alert.alert("Please enter all values");
  // };

  // const handleOnchange = (text: any, input: any) => {
  //   setInputs((prevState: any) => ({ ...prevState, [input]: text }));
  // };
  return (
    <KeyboardAwareScrollView>
      <StatusBar hidden={true} />
      <SafeAreaView
        style={{
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(100),
          alignItems: "center",
          backgroundColor: "#121f27",
        }}
      >
        <View
          style={{
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(10),
            // borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
        <KeyboardAwareScrollView
          bounces={false}
          contentContainerStyle={{
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(100),
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 30,
            paddingHorizontal: responsiveScreenWidth(7),
            paddingVertical: responsiveScreenHeight(2),
          }}
        >
          <Body1
            style={{
              alignSelf: "flex-start",
              marginBottom: responsiveScreenHeight(1),
            }}
          >
            Contact Us
          </Body1>

          {/* EMAIL ////////////////////////////////////////////////////////////////////////////////////*/}
          <View style={styles.inputWithLabelContainer}>
            <Label>EMAIL ADDRESS</Label>
            <TouchableOpacity
              style={styles.inputWithLabelContainer_textInput}
              onPress={() =>
                Linking.openURL("mailto:customer.service@kenaf.ie")
              }
            >
              <Text style={{ fontSize: responsiveScreenFontSize(2.2) }}>
                customer.service@kenaf.ie
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  accountDetailsContainer: {
    width: "100%",
    height: "50%",
  },
  inputWithLabelContainer: {
    width: "100%",
    height: responsiveScreenHeight(11),
    marginTop: responsiveScreenHeight(2),
    // borderWidth: 2,
    display: "flex",
  },
  inputWithLabelContainer_DateOfBirth: {
    width: "100%",
    height: responsiveScreenHeight(11),
    marginTop: responsiveScreenHeight(2),
    // borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputWithLabelContainer_textInput: {
    width: "100%",
    height: "75%",
    borderRadius: 15,
    backgroundColor: "#f6f8fa",
    fontSize: 19,
    paddingLeft: "5%",
    color: "black",
    borderColor: "#dee8ef",
    marginTop: responsiveScreenHeight(1),
    borderWidth: 1,
    justifyContent: "center",
  },
  inputWithLabelContainer_textInput_DateOfBirth: {
    width: "100%",
    height: "75%",
    borderRadius: 15,
    backgroundColor: "#f6f8fa",
    fontSize: 19,
    paddingLeft: "5%",
    color: "black",
    borderColor: "#dee8ef",
    marginTop: responsiveScreenHeight(1),
    borderWidth: 1,
  },
  firstNameLastNameContainer: {
    width: "100%",
    height: responsiveScreenHeight(10),
    // borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  firstNameLastNameContainer_firstName: {
    width: "48%",
    height: "100%",
    // borderWidth: 2,
  },
  firstNameLastNameContainer_lastName: {
    width: "48%",
    height: "100%",
    // borderWidth: 2,
  },
  manage: {
    width: "100%",
    height: responsiveScreenHeight(5),
    // borderWidth: 3,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: responsiveScreenHeight(3),
    marginBottom: responsiveScreenHeight(3),
  },
  dropDownAndroid: {
    width: responsiveScreenWidth(60),
    borderRadius: 10,
    height: responsiveScreenHeight(7),
    paddingHorizontal: responsiveScreenWidth(5),
    borderColor: "#e9f2eb",
    borderWidth: 3,
  },
  dropDownIOS: {
    width: responsiveScreenWidth(60),
    borderRadius: 10,
    height: responsiveScreenHeight(7),

    paddingHorizontal: responsiveScreenWidth(5),
    borderColor: "#e9f2eb",
    borderWidth: 3,
  },

  dropDownContainer: {
    marginTop: responsiveScreenHeight(0.5),
    height: responsiveScreenHeight(15),
    borderWidth: 2,
    borderRadius: 10,
  },
  emptyList: {
    paddingHorizontal: responsiveScreenWidth(5),
    alignItems: "center",
    height: responsiveScreenHeight(5),
    justifyContent: "center",
  },
});

export default ContactUsScreen;

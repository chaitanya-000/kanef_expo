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

const AccountSettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [userID, setUserId] = useState("");
  const initialValues = {
    uId: userID,
    DOB: "",
    Gender: "",
    address2: "",
    city: "",
    country: "",
    EIRcode: "",
    address1: "",
  };
  const [inputs, setInputs] = useState<any>(initialValues);
  const [fetchedData, setFetchedData] = useState<any>(null);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("uId");
      if (value !== null) {
        setUserId(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  const getUserInfo = () => {
    axios
      .post("https://kenaf.ie/appUserInfo", {
        uId: JSON.parse(userID),
      })
      .then((response) => {
        const userDetails = response.data.data[0];
        console.log(userDetails);
        setFetchedData(userDetails);
      })
      .then((error) => {
        // console.log(error);
      });
  };
  useEffect(() => {
    getData();
    userID && getUserInfo();
  }, [userID]);

  const sendData = () => {
    inputs.uID &&
    inputs.DOB &&
    inputs.Gender &&
    inputs.address2 &&
    inputs.city &&
    inputs.country &&
    inputs.EIRcode &&
    inputs.address1
      ? axios
          .post("https://kenaf.ie/appUserUpdate", {
            uId: inputs.uID,
            DOB: inputs.DOB,
            Gender: inputs.Gender,
            address2: inputs.address2,
            city: inputs.city,
            country: inputs.country,
            EIRcode: inputs.EIRcode,
            address1: inputs.address1,
          })
          .then((response) => {
            console.log(response);
            setInputs(initialValues);
            Alert.alert(response.data.message);
          })
          .catch((error) => {
            console.log(error);
          })
      : Alert.alert("Please enter all values");
  };

  const handleOnchange = (text: any, input: any) => {
    setInputs((prevState: any) => ({ ...prevState, [input]: text }));
  };
  return (
    <KeyboardAwareScrollView>
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
        >
          <Body1 style={{ color: "white", alignSelf: "center" }}>
            Account Settings
          </Body1>
        </View>
        <KeyboardAwareScrollView
          bounces={false}
          contentContainerStyle={{
            width: responsiveScreenWidth(100),
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
            Account Details
          </Body1>

          {/* EMAIL ////////////////////////////////////////////////////////////////////////////////////*/}
          <View style={styles.inputWithLabelContainer}>
            <Label>EMAIL ADDRESS</Label>
            <View>
              <TextInput
                style={styles.inputWithLabelContainer_textInput}
                textContentType="emailAddress"
                value={fetchedData?.email}
              />
            </View>
          </View>

          {/* PASSWORD//////////////////////////////////////////////////////////////////////////////////// */}
          <View style={styles.inputWithLabelContainer}>
            <Label>Password</Label>
            <View>
              <TextInput
                style={styles.inputWithLabelContainer_textInput}
                secureTextEntry
              />
            </View>
          </View>

          <Body1
            style={{
              alignSelf: "flex-start",
              marginBottom: responsiveScreenHeight(1),
            }}
          >
            About Me
          </Body1>

          {/* FirstName ////////////////////////////////////////////////////////////////////////////////////*/}

          <View style={styles.firstNameLastNameContainer}>
            <View style={styles.firstNameLastNameContainer_firstName}>
              <Label>first Name</Label>
              <View>
                <TextInput
                  style={styles.inputWithLabelContainer_textInput}
                  value={fetchedData?.firstName}
                />
              </View>

              {/* Last Name ////////////////////////////////////////////////////////////////////////////////////*/}
            </View>
            <View style={styles.firstNameLastNameContainer_lastName}>
              <Label>Last name</Label>
              <View>
                <TextInput
                  style={styles.inputWithLabelContainer_textInput}
                  value={fetchedData?.lastName}
                />
              </View>
            </View>
          </View>

          {/* Date of Birth//////////////////////////////////////////////////////////////////////////////////// */}
          <View style={styles.inputWithLabelContainer_DateOfBirth}>
            <View style={{ width: "80%", height: "100%" }}>
              <Label>Date of birth</Label>
              <View>
                <MaskInput
                  style={styles.inputWithLabelContainer_textInput_DateOfBirth}
                  placeholder="YYYY/MM/DD"
                  value={inputs.DOB}
                  onChangeText={(masked) => handleOnchange(masked, "DOB")}
                  keyboardType="number-pad"
                  mask={Masks.DATE_YYYYMMDD}
                />
              </View>
            </View>
            <MaterialIcons
              name="date-range"
              size={34}
              color="black"
              style={{ alignSelf: "center", marginTop: "5%" }}
            />
          </View>

          {/* Gender//////////////////////////////////////////////////////////////////////////////////// */}
          <View style={styles.inputWithLabelContainer_DateOfBirth}>
            <View style={{ width: "80%", height: "100%" }}>
              <Label>Gender</Label>
              <View>
                <Dropdown
                  activeColor="#26ae60ed"
                  placeholder="Male/Female"
                  style={
                    Platform.OS === "android"
                      ? styles.dropDownAndroid
                      : styles.dropDownIOS
                  }
                  data={[
                    {
                      id: "Male",
                      value: "Male",
                    },
                    {
                      id: "Female",
                      value: "Female",
                    },
                  ]}
                  labelField="value"
                  valueField="value"
                  containerStyle={styles.dropDownContainer}
                  backgroundColor={`rgba(0,0,0,0.8)`}
                  onChange={(data) => handleOnchange(data.value, "Gender")}
                  value={inputs.Gender}
                />
              </View>
            </View>
          </View>

          {/* AddressLine 1//////////////////////////////////////////////////////////////////////////////////// */}
          <View style={styles.inputWithLabelContainer}>
            <Label>AddressLine 1</Label>
            <View>
              <TextInput
                style={styles.inputWithLabelContainer_textInput}
                textContentType="streetAddressLine1"
                onChangeText={(text) => handleOnchange(text, "address1")}
              />
            </View>
          </View>
          {/* AddressLine 2//////////////////////////////////////////////////////////////////////////////////// */}
          <View style={styles.inputWithLabelContainer}>
            <Label>AddressLine 2</Label>
            <View>
              <TextInput
                style={styles.inputWithLabelContainer_textInput}
                textContentType="streetAddressLine2"
                onChangeText={(text) => handleOnchange(text, "address2")}
              />
            </View>
          </View>
          {/* city//////////////////////////////////////////////////////////////////////////////////// */}
          <View style={styles.inputWithLabelContainer}>
            <Label>city</Label>
            <View>
              <TextInput
                style={styles.inputWithLabelContainer_textInput}
                textContentType="addressCity"
                onChangeText={(text) => handleOnchange(text, "city")}
              />
            </View>
          </View>
          {/* Country//////////////////////////////////////////////////////////////////////////////////// */}
          <View style={styles.inputWithLabelContainer}>
            <Label>Country</Label>
            <View>
              <TextInput
                style={styles.inputWithLabelContainer_textInput}
                textContentType="countryName"
                onChangeText={(text) => handleOnchange(text, "country")}
              />
            </View>
          </View>
          {/* EIRCODE//////////////////////////////////////////////////////////////////////////////////// */}
          <View style={styles.inputWithLabelContainer}>
            <Label>EIRCODE</Label>
            <View>
              <TextInput
                style={styles.inputWithLabelContainer_textInput}
                textContentType="postalCode"
                onChangeText={(text) => handleOnchange(text, "EIRcode")}
              />
            </View>
          </View>

          {/* Manage //////////////////////////////////////////////////////////////////////////////////// */}
          <Heading5
            style={{
              alignSelf: "flex-start",
              marginTop: responsiveScreenHeight(2),
            }}
          >
            Manage
          </Heading5>
          <View style={styles.manage}>
            <Body1>Notifications </Body1>
            <Switch
              trackColor={{ false: "black", true: "white" }}
              thumbColor={isEnabled ? "#26ae60ed" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <GreenButton
            height={"4%"}
            marginTop={"0%"}
            width={"98%"}
            style={{ marginBottom: responsiveScreenHeight(8) }}
            onPress={sendData}
          >
            <Body1 style={{ color: "white" }}>Save</Body1>
          </GreenButton>
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

export default AccountSettingsScreen;

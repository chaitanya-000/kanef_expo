import {
  StyleSheet,
  TextInput,
  View,
  Switch,
  Platform,
  Alert,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  StatusBar,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Body1, Heading5, Heading6 } from "../atoms/Typography";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Label } from "../molecules/TextInputWithLabel";
import { MaterialIcons } from "@expo/vector-icons";
import { GreenButton } from "../atoms/GreenButton";
import axios from "axios";
import { Dropdown } from "react-native-element-dropdown";
import MaskInput, { Masks } from "react-native-mask-input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../store";
import { Ionicons } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay/lib";

const AccountSettingsScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [userID, setUserId] = useState("");
  const initialValues = {
    DOB: "",
    Gender: "",
    address2: "",
    city: "",
    country: "",
    EIRcode: "",
    address1: "",
    phone: "",
  };
  const [inputs, setInputs] = useState<any>(initialValues);
  const [fetchedData, setFetchedData] = useState<any>(null);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
  const getUserInfo = () => {
    setLoading(true);
    axios
      .post("https://kenaf.ie/appUserInfo", {
        uId: JSON.parse(userID),
      })
      .then((response) => {
        setLoading(false);
        const userDetails = response.data.data[0];
        setFetchedData(userDetails);
      })
      .catch((error) => {
        setLoading(false);

        alert(error.message);
      });
  };
  useEffect(() => {
    getData();

    userID && getUserInfo();
  }, [userID]);

  const sendData = () => {
    if (!inputs.phone) {
      alert("Please Enter Phone number");
      return;
    }
    if (!inputs.DOB) {
      alert("Please Enter Date Of Birth");
      return;
    }
    if (!inputs.Gender) {
      alert("Please Enter Gender");
      return;
    }
    if (!inputs.city) {
      alert("Please ENter City");
      return;
    }
    if (!inputs.address1) {
      alert("Please Enter Address 1");
      return;
    }

    if (!inputs.EIRcode) {
      alert("Please Enter EIRCODE");
      return;
    }
    if (!inputs.country) {
      alert("Please Enter country ");
      return;
    }

    setLoading(true);
    userID &&
    inputs.DOB &&
    inputs.Gender &&
    inputs.address1 &&
    inputs.city &&
    inputs.country &&
    inputs.EIRcode &&
    inputs.phone
      ? axios
          .post("https://kenaf.ie/appUserUpdate", {
            uId: JSON.parse(userID),
            DOB: inputs.DOB,
            Gender: inputs.Gender,
            address2: inputs.address2,
            city: inputs.city,
            country: inputs.country,
            EIRcode: inputs.EIRcode,
            address1: inputs.address1,
            phone: inputs.phone,
          })
          .then((response) => {
            setLoading(false);
            Alert.alert(response.data.message);
            navigation.navigate("Camera");
          })
          .catch((error) => {
            setLoading(false);

            alert(error.message);
          })
      : Alert.alert("Enter all values");
  };

  const handleOnchange = (text: any, input: any) => {
    setInputs((prevState: any) => ({ ...prevState, [input]: text }));
  };
  return (
    <KeyboardAvoidingView>
      <Spinner visible={loading} />
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
              Account Settings
            </Body1>
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            // bounces={false}
            contentContainerStyle={{
              width: responsiveScreenWidth(100),
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 30,
              paddingHorizontal: responsiveScreenWidth(7),
              paddingVertical: responsiveScreenHeight(4),
            }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => {
                  setRefreshing(false);
                  getUserInfo();
                }}
              />
            }
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

            {/* Phone//////////////////////////////////////////////////////////////////////////////////// */}
            <View style={styles.inputWithLabelContainer}>
              <Label>Phone Number</Label>
              <View>
                <TextInput
                  style={
                    fetchedData?.phone
                      ? styles.inputWithLabelContainer_textInput
                      : styles.Data_Does_not_exist_inputWithLabelContainer_textInput
                  }
                  textContentType="telephoneNumber"
                  onChangeText={(text) => {
                    handleOnchange(text, "phone");
                  }}
                  maxLength={10}
                  keyboardType="number-pad"
                  placeholder={
                    fetchedData?.phone ? fetchedData.phone : "phone number..."
                  }
                  placeholderTextColor={
                    fetchedData?.phone ? "#26ae60ed" : "black"
                  }
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
                    style={
                      fetchedData?.DOB
                        ? styles.inputWithLabelContainer_textInput_DateOfBirth
                        : styles.Data_Does_not_exist_inputWithLabelContainer_textInput_DateOfBirth
                    }
                    placeholder={
                      fetchedData?.DOB ? fetchedData.DOB : "YYYY/MM/DD"
                    }
                    placeholderTextColor={
                      fetchedData?.Gender ? "#26ae60ed" : "black"
                    }
                    value={inputs?.DOB}
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
                    placeholder={
                      fetchedData?.Gender ? fetchedData.Gender : "Male/Female"
                    }
                    placeholderStyle={{
                      color: fetchedData?.Gender ? "#26ae60ed" : "black",
                    }}
                    style={
                      Platform.OS === "android"
                        ? fetchedData?.Gender
                          ? styles.dropDownAndroid
                          : styles.Data_Does_Not_exist_dropDownAndroid
                        : fetchedData?.Gender
                        ? styles.dropDownIOS
                        : styles.Data_Does_Not_exist_dropDownIOS
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
                    value={inputs?.Gender}
                  />
                </View>
              </View>
            </View>

            {/* AddressLine 1//////////////////////////////////////////////////////////////////////////////////// */}
            <View style={styles.inputWithLabelContainer}>
              <Label>AddressLine 1</Label>
              <View>
                <TextInput
                  placeholder={
                    fetchedData?.address1
                      ? fetchedData.address1
                      : "Street name..."
                  }
                  style={
                    fetchedData?.address1
                      ? styles.inputWithLabelContainer_textInput
                      : styles.Data_Does_not_exist_inputWithLabelContainer_textInput
                  }
                  textContentType="streetAddressLine1"
                  onChangeText={(text) => handleOnchange(text, "address1")}
                  placeholderTextColor={
                    fetchedData?.address1 ? "#26ae60ed" : "black"
                  }
                />
              </View>
            </View>
            {/* AddressLine 2//////////////////////////////////////////////////////////////////////////////////// */}
            <View style={styles.inputWithLabelContainer}>
              <Label>AddressLine 2</Label>
              <View>
                <TextInput
                  style={
                    fetchedData?.address2
                      ? styles.inputWithLabelContainer_textInput
                      : styles.Data_Does_not_exist_inputWithLabelContainer_textInput
                  }
                  textContentType="streetAddressLine2"
                  onChangeText={(text) => handleOnchange(text, "address2")}
                  placeholder={
                    fetchedData?.address2
                      ? fetchedData.address2
                      : "Area/Block Name"
                  }
                  placeholderTextColor={
                    fetchedData?.address2 ? "#26ae60ed" : "black"
                  }
                />
              </View>
            </View>
            {/* city//////////////////////////////////////////////////////////////////////////////////// */}
            <View style={styles.inputWithLabelContainer}>
              <Label>city</Label>
              <View>
                <TextInput
                  style={
                    fetchedData?.city
                      ? styles.inputWithLabelContainer_textInput
                      : styles.Data_Does_not_exist_inputWithLabelContainer_textInput
                  }
                  textContentType="addressCity"
                  onChangeText={(text) => handleOnchange(text, "city")}
                  placeholder={
                    fetchedData?.city ? fetchedData.city : "eg . Dublin "
                  }
                  placeholderTextColor={
                    fetchedData?.city ? "#26ae60ed" : "black"
                  }
                />
              </View>
            </View>
            {/* Country//////////////////////////////////////////////////////////////////////////////////// */}
            <View style={styles.inputWithLabelContainer}>
              <Label>Country</Label>
              <View>
                <TextInput
                  style={
                    fetchedData?.country
                      ? styles.inputWithLabelContainer_textInput
                      : styles.Data_Does_not_exist_inputWithLabelContainer_textInput
                  }
                  textContentType="countryName"
                  onChangeText={(text) => handleOnchange(text, "country")}
                  placeholder={
                    fetchedData?.country ? fetchedData.country : "eg . Ireland"
                  }
                  placeholderTextColor={
                    fetchedData?.country ? "#26ae60ed" : "black"
                  }
                />
              </View>
            </View>
            {/* EIRCODE//////////////////////////////////////////////////////////////////////////////////// */}
            <View style={styles.inputWithLabelContainer}>
              <Label>EIRCODE</Label>
              <View>
                <TextInput
                  style={
                    fetchedData?.EIRcode
                      ? styles.inputWithLabelContainer_textInput
                      : styles.Data_Does_not_exist_inputWithLabelContainer_textInput
                  }
                  textContentType="postalCode"
                  placeholder={
                    fetchedData?.EIRcode
                      ? fetchedData.EIRcode
                      : "eg . A65 F4E2."
                  }
                  onChangeText={(text) => handleOnchange(text, "EIRcode")}
                  placeholderTextColor={
                    fetchedData?.EIRcode ? "#26ae60ed" : "black"
                  }
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
              style={{ marginBottom: responsiveScreenHeight(20) }}
              onPress={sendData}
            >
              <Body1 style={{ color: "white" }}>Save</Body1>
            </GreenButton>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
    // borderColor: "#dee8ef",
    marginTop: responsiveScreenHeight(1),
    borderWidth: 1,
  },
  Data_Does_not_exist_inputWithLabelContainer_textInput: {
    width: "100%",
    height: "75%",
    borderRadius: 15,
    backgroundColor: "#f6f8fa",
    fontSize: 19,
    paddingLeft: "5%",
    color: "black",
    borderColor: "red",
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
  Data_Does_not_exist_inputWithLabelContainer_textInput_DateOfBirth: {
    width: "100%",
    height: "75%",
    borderRadius: 15,
    backgroundColor: "#f6f8fa",
    fontSize: 19,
    paddingLeft: "5%",
    color: "black",
    borderColor: "red",

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
  Data_Does_Not_exist_dropDownAndroid: {
    width: responsiveScreenWidth(60),
    borderRadius: 10,
    height: responsiveScreenHeight(7),
    paddingHorizontal: responsiveScreenWidth(5),
    borderColor: "red",
    borderWidth: 1.2,
  },
  dropDownIOS: {
    width: responsiveScreenWidth(60),
    borderRadius: 10,
    height: responsiveScreenHeight(7),

    paddingHorizontal: responsiveScreenWidth(5),
    borderColor: "#e9f2eb",
    borderWidth: 3,
  },
  Data_Does_Not_exist_dropDownIOS: {
    width: responsiveScreenWidth(60),
    borderRadius: 10,
    height: responsiveScreenHeight(7),

    paddingHorizontal: responsiveScreenWidth(5),
    borderColor: "red",

    borderWidth: 1.2,
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

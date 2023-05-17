import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import {
  Header,
  PageContainer,
  PageContent,
  SolidGreenButton,
  WhiteRoundedContainer,
} from "../styledComponents/Register,Login";
import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { TextInput } from "react-native-gesture-handler";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import axios from "axios";
import { BASE_URL } from "../helperFunctions";
import Spinner from "react-native-loading-spinner-overlay";

const VerifyOtp = ({ route, navigation }: any) => {
  const [otp, setOTP] = useState(["", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const handleOTPChange = (index: any, value: any) => {
    // Allow only numbers
    const numericValue = value.replace(/[^0-9]/g, "");

    // Update OTP value at the given index
    const updatedOTP = [...otp];
    updatedOTP[index] = value;
    setOTP(updatedOTP);

    // Check if backspace key was pressed and current input is empty
    if (value === "" && value === "" && index > 0) {
      // Move focus to the previous input field
      setTimeout(() => {
        refs[index - 1].focus();
      }, 0);
    } else if (index < otp.length - 1 && value !== "") {
      // Focus the next input field, if available
      setTimeout(() => {
        refs[index + 1].focus();
      }, 0);
    }
  };

  // Array to store refs of the OTP input fields
  const refs: any = useRef([]);

  const sendUserRegistrationDetails = () => {
    setLoading(true);
    axios
      .post(`${BASE_URL}/appuserregister`, {
        firstName: route.params.firstName,
        lastName: route.params.lastName,
        email: route.params.email,
        password: route.params.password,
      })
      .then((response) => {
        setLoading(false);
        // console.log(response.data);
        response.data[0] &&
          Alert.alert(response.data.data, "", [
            {
              text: "Ok",
              onPress: () => navigation.navigate("Login"),
            },
          ]);
      })
      .catch((error) => {
        setLoading(false);

        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleVerifyOTP = () => {
    const enteredOTP = otp.join("");
    if (enteredOTP == route.params.otp) {
      sendUserRegistrationDetails();
    } else {
      // OTP verification failed
      Alert.alert("Error", "OTP verification failed");
    }
  };

  return (
    <PageContainer style={{ backgroundColor: "rgba(38, 174, 96, 1)" }}>
      <Spinner visible={loading} />
      <View style={styles.infoText}>
        <Text style={styles.verificationCodeHeading}>
          Verification {route.params.otp}
        </Text>
        <Text style={styles.instructions}>
          Hey {route.params.firstName}, we have sent a 5 digit verification code
          to {route.params.email}.
        </Text>
      </View>
      <WhiteRoundedContainer style={{ marginTop: "10%" }}>
        <PageContent>
          <View style={styles.container}>
            <View style={styles.otpInputContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(input) => (refs[index] = input)}
                  style={styles.input}
                  value={digit}
                  onChangeText={(value) => handleOTPChange(index, value)}
                  maxLength={1}
                  keyboardType="numeric"
                />
              ))}
            </View>

            <SolidGreenButton
              width={"85%"}
              height={"10%"}
              style={{ alignSelf: "center", marginTop: "90%" }}
              onPress={handleVerifyOTP}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: 20,
                }}
              >
                Continue
              </Text>
            </SolidGreenButton>
          </View>
        </PageContent>
      </WhiteRoundedContainer>
    </PageContainer>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  screenName: {
    fontSize: responsiveScreenFontSize(4),
    fontWeight: "700",
    marginBottom: "5%",
  },
  imageAndTextContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    width: "100%",
    height: "20%",
    // alignItems: "center",
    justifyContent: "space-around",
    padding: "4%",
    // backgroundColor: "red",
  },
  verificationCodeHeading: {
    fontSize: responsiveFontSize(4),
    color: "white",
    fontWeight: "500",
  },
  instructions: {
    fontSize: responsiveFontSize(2.4),
    color: "white",
    fontWeight: "300",
  },
  otpInputContainer: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: "red",
  },
  inputBox: {
    width: "15%",
    height: "60%",
    paddingHorizontal: "3%",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "baseline",
    justifyContent: "center",
  },
  otpTextInput: {
    width: "100%",
    height: "80%",
    alignSelf: "center",
    // backgroundColor: "red",
    fontSize: responsiveScreenFontSize(5),
  },
  input: {
    width: "15%",
    height: "50%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    textAlign: "center",
    fontSize: responsiveScreenFontSize(4),
    // backgroundColor: "red",
  },
});

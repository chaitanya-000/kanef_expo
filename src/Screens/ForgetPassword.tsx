import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import {
  PageContainer,
  PageContent,
  SolidGreenButton,
} from "../styledComponents/Register,Login";
import Spinner from "react-native-loading-spinner-overlay";
import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { WhiteRoundedContainer } from "../styledComponents/Receipts,Reward,BillPage";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
import { BASE_URL } from "../helperFunctions";
import Timer from "../organisms/Timer";

const ForgetPassword = ({ navigation }: any) => {
  const [otp, setOTP] = useState(["", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [showOtpInput, setShowOtpInput] = useState<boolean>(false);
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  const [receivedOtp, setReceivedOtp] = useState<any>("");
  // const [regeneratedOtp, setRegeneratedOtp] = useState<any>(null);
  const [showOtpAgain, setShowOtpAgain] = useState(false);

  const handleOTPChange = (index: any, value: any) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const updatedOTP = [...otp];
    updatedOTP[index] = numericValue;
    setOTP(updatedOTP);
    if (value === "" && numericValue === "" && index > 0) {
      setTimeout(() => {
        refs[index - 1].focus();
      }, 0);
    } else if (index < otp.length - 1 && numericValue !== "") {
      setTimeout(() => {
        refs[index + 1].focus();
      }, 0);
    }
  };
  const refs: any = useRef([]);

  const sendEnteredEmail = () => {
    setLoading(true);
    axios
      .post(`${BASE_URL}/ForgetPasswordVerification`, {
        email: email,
      })
      .then((response) => {
        setLoading(false);
        if (response.data.status) {
          setShowOtpInput(true);
          setReceivedOtp(parseInt(response.data.data));
          setApiMessage(response.data.message);
        } else {
          Alert.alert(response.data.message, "", [
            {
              text: "Ok",
              onPress: () => navigation.navigate("RegisterPage", {}),
            },
          ]);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const checkEnteredEmail = () => {
    if (!email || email.length < 5 || !email.includes("@" || ".com")) {
      alert("Enter a valid email");
    } else {
      sendEnteredEmail();
    }
  };

  const handleVerifyOTP = () => {
    const enteredOTP = parseInt(otp.join(""));

    if (enteredOTP === receivedOtp) {
      navigation.navigate("UpdatePassword", {
        email: email,
      });
    } else {
      Alert.alert("OTPs do not match");
    }
  };

  const sendEmailAgain = () => {
    setShowOtpAgain(false);
    axios
      .post(`${BASE_URL}/ForgetPasswordVerification`, {
        email: email,
      })
      .then((response) => {
        setReceivedOtp(parseInt(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const disableSwipeToGoBack = () => {
      // Disable swipe-to-go-back functionality
      return true;
    };

    // Add event listener for the hardware back button
    BackHandler.addEventListener("hardwareBackPress", disableSwipeToGoBack);

    // Clean up the event listener on unmount
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        disableSwipeToGoBack
      );
    };
  }, []);

  return (
    <PageContainer style={{ backgroundColor: "rgba(38, 174, 96, 1)" }}>
      <Spinner visible={loading} />
      <View style={styles.infoText}>
        <Text style={styles.verificationCodeHeading}>Forget Password</Text>
        <Text style={styles.instructions}>
          Enter your registered email address with Kenaf
        </Text>
      </View>
      <WhiteRoundedContainer style={{ marginTop: "10%", padding: "5%" }}>
        <PageContent>
          <View style={styles.container}>
            <View style={styles.container_InputContainer}>
              <TextInput
                style={styles.container_emailTextInput}
                onChangeText={(value: string) => setEmail(value)}
              />

              {(showOtpInput && (
                <View style={styles.otpContainer}>
                  <Text style={styles.APImessage}>{apiMessage}</Text>
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

                  {showOtpAgain ? (
                    <View style={styles.clickToGetOtpAgain}>
                      <TouchableOpacity onPress={sendEmailAgain}>
                        <Text>
                          Didn't get the OTP ? Click here to send again
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <Timer setShowOtpAgain={setShowOtpAgain} />
                  )}
                  <SolidGreenButton
                    width={"85%"}
                    height={"17%"}
                    style={{ alignSelf: "center", marginTop: "10%" }}
                    onPress={handleVerifyOTP}
                  >
                    <Text style={styles.buttonText}>Send</Text>
                  </SolidGreenButton>
                  <View style={styles.timer_container}></View>
                </View>
              )) || (
                <SolidGreenButton
                  width={"85%"}
                  height={"17%"}
                  style={{ alignSelf: "center", marginTop: "10%" }}
                  onPress={checkEnteredEmail}
                >
                  <Text style={styles.buttonText}>Continue</Text>
                </SolidGreenButton>
              )}
            </View>
          </View>
        </PageContent>
      </WhiteRoundedContainer>
    </PageContainer>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    // borderWidth: 1,
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
    height: "40%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: "red",
  },
  inputBox: {
    width: "15%",
    height: "90%",
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
    height: "45%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    textAlign: "center",
    fontSize: responsiveScreenFontSize(4),
    // backgroundColor: "red",
  },
  clickToGetOtpAgain: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
  },
  footer: {
    alignItems: "center",
    marginTop: "60%",
    // borderWidth: 1,
  },
  already_have_an_account: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 17,
  },
  login: {
    color: "rgba(38, 174, 96, 1)",
    fontWeight: "600",
    fontSize: 20,
  },
  container_InputContainer: {
    width: "100%",
    height: "60%",
    // borderWidth: 1,
  },
  container_emailTextInput: {
    width: "100%",
    height: "20%",
    borderWidth: 1,
    paddingHorizontal: "3%",
    fontSize: responsiveFontSize(2.5),
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
  otpContainer: {
    width: "100%",
    height: "90%",
    justifyContent: "space-around",
    marginTop: "10%",
    // borderWidth: 2,
  },
  APImessage: {
    fontSize: responsiveFontSize(2),
    textAlign: "center",
  },
  timer_container: {
    width: "100%",
    height: "14%",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
  },
});

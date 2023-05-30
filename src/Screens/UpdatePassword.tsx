import { StyleSheet, Text, View, BackHandler } from "react-native";
import React, { useState, useEffect } from "react";
import {
  PageContainer,
  PageContent,
  SolidGreenButton,
} from "../styledComponents/Register,Login";
import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { WhiteRoundedContainer } from "../styledComponents/Receipts,Reward,BillPage";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
import { BASE_URL } from "../helperFunctions";

const UpdatePassword = ({ navigation, route }: any) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const updatePassword = () => {
    const handleUpdatePassword = () => {
      setLoading(true);
      axios
        .post(`${BASE_URL}/updatePassword`, {
          email: route.params.email,
          password: password,
        })
        .then((response) => {
          setLoading(false);
          if (response.data.status) {
            navigation.navigate("Login");
          }
          console.log(response);
        })
        .catch((error) => {
          setLoading(false);

          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    if (password && confirmPassword) {
      if (password.length >= 6) {
        if (password == confirmPassword) {
          handleUpdatePassword();
        } else {
          alert("Passwords do not match.Check again");
        }
      } else {
        alert(" Password should be at least 6 characters long");
      }
    } else {
      alert("Password and Confirm password cannot be empty");
    }
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
      <View style={styles.infoText}>
        <Text style={styles.verificationCodeHeading}>Enter new password</Text>

        <Text style={styles.instructions}>
          Password should be at least 6 characters long
        </Text>
      </View>
      <WhiteRoundedContainer style={{ marginTop: "10%", padding: "5%" }}>
        <PageContent>
          <View style={styles.container}>
            <View style={styles.container_textInputContainer}>
              <View
                style={styles.container_textInputContainer_textInputWithLabel}
              >
                <Text>New password</Text>
                <TextInput
                  style={styles.container_emailTextInput}
                  onChangeText={(value) => setPassword(value)}
                  secureTextEntry={true}
                />
              </View>
              <View
                style={styles.container_textInputContainer_textInputWithLabel}
              >
                <Text>Confirm password</Text>
                <TextInput
                  style={styles.container_emailTextInput}
                  onChangeText={(value) => setConfirmPassword(value)}
                  secureTextEntry={true}
                />
              </View>
            </View>
            <SolidGreenButton
              width={"85%"}
              height={"8%"}
              style={{ alignSelf: "center", marginTop: "15%" }}
              onPress={updatePassword}
            >
              <Text style={styles.buttonText}>Confirm</Text>
            </SolidGreenButton>
          </View>
        </PageContent>
      </WhiteRoundedContainer>
    </PageContainer>
  );
};

export default UpdatePassword;

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
    borderRadius: 5,
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
  clickToGetOtpAgain: {
    width: "100%",
    height: "10%",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
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
  container_InputContainer: {
    width: "100%",
    height: "60%",
    // borderWidth: 1,
  },
  container_emailTextInput: {
    width: "100%",
    height: "60%",
    borderWidth: 1,
    paddingHorizontal: "3%",
    fontSize: responsiveFontSize(2.5),
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 19,
  },
  otpContainer: {
    width: "100%",
    height: "90%",
    justifyContent: "space-around",
    marginTop: "10%",
    // borderWidth: 2,
  },
  APImessage: {
    fontSize: responsiveFontSize(2.4),
    textAlign: "center",
  },
  container_textInputContainer: {
    width: "100%",
    height: "40%",
    justifyContent: "space-around",
    // borderWidth: 1,
  },
  container_textInputContainer_textInputWithLabel: {
    width: "100%",
    height: "40%",
    justifyContent: "space-around",
    // borderWidth: 1,
  },
});

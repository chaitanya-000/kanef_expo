import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  SolidGreenButton,
  WhiteRoundedContainer,
  StyledScrollView,
  ScrollViewContainer,
  ScreenName,
} from "../styledComponents/Register,Login";
import {
  BASE_URL,
  height,
  responsiveFontSize,
  width,
} from "../helperFunctions";
import axios from "axios";
import FirstNameLastNameContainer from "../organisms/FirstNameLastNameContainer";
import EmailAddress from "../organisms/EmailAddress";
import Password from "../organisms/Password";
import ConfirmPassword from "../organisms/ConfirmPassword";
import { responsiveScreenFontSize } from "react-native-responsive-dimensions";
import Spinner from "react-native-loading-spinner-overlay";

const Register = ({ navigation }: any) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_enteredPassword, setRe_enteredPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = () => {
    try {
      if (!firstName) {
        throw new Error("Please Enter First name");
      }
      if (!lastName) {
        throw new Error("Please Enter last Name");
      }

      if (!email) {
        throw new Error("Please enter Email ");
      }

      if (!password) {
        throw new Error("Please Enter password");
      }

      if (password.length < 6) {
        throw new Error("Password should be at least 6 characters long");
      }
      if (password !== re_enteredPassword) {
        throw new Error("Passwords do not match");
      }

      setLoading(true);
      axios
        .post(`${BASE_URL}/appuserregister`, {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
          if (response.data.data) {
            Alert.alert(response.data.data, "", [
              {
                text: "OK",
                onPress: () => navigation.navigate("Login"),
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
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{ width: width, height: height, backgroundColor: "red" }}
        behavior="height"
      >
        {loading && <Spinner visible={loading} />}
        <View
          style={{
            width: width,
            height: "100%",
            backgroundColor: "red",
          }}
        >
          <Image
            source={require("../../assets/images/RegisterScreenImage.png")}
            style={{
              width: "100%",
              height: "70%",
              bottom: "35%",
              position: "absolute",
              left: 0,
              alignSelf: "center",
            }}
            resizeMode="cover"
          />
          <WhiteRoundedContainer
            style={{
              position: "absolute",
              top: "35%",
            }}
          >
            <ScrollViewContainer>
              <StyledScrollView
                contentContainerStyle={styles.scrollViewContentContainer}
              >
                <ScreenName style={styles.screenName}>Register</ScreenName>
                <FirstNameLastNameContainer
                  firstName={firstName}
                  lastName={lastName}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                />

                <EmailAddress email={email} setEmail={setEmail} />

                <Password password={password} setPassword={setPassword} />
                <ConfirmPassword
                  setRe_enteredPassword={setRe_enteredPassword}
                />

                <SolidGreenButton
                  width={"85%"}
                  height={"13%"}
                  style={{ alignSelf: "center" }}
                  onPress={registerUser}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "900",
                      fontSize: 20,
                    }}
                  >
                    Sign Up
                  </Text>
                </SolidGreenButton>
                <View style={styles.footer}>
                  <Text style={styles.already_have_an_account}>
                    Already have an account?
                  </Text>

                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={styles.login}>Login</Text>
                  </TouchableOpacity>
                </View>
              </StyledScrollView>
            </ScrollViewContainer>
          </WhiteRoundedContainer>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    paddingBottom: "60%",
  },
  screenName: {
    fontSize: responsiveScreenFontSize(4),
    fontWeight: "700",
    marginBottom: "5%",
  },
  footer: {
    alignItems: "center",
    marginTop: "10%",
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
});

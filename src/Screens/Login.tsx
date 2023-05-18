import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import {
  SolidGreenButton,
  WhiteRoundedContainer,
  StyledScrollView,
  ScrollViewContainer,
  ScreenName,
} from "../styledComponents/Register,Login";
import { height, width } from "../helperFunctions";
import EmailAddress from "../organisms/EmailAddress";
import Password from "../organisms/Password";
import { responsiveScreenFontSize } from "react-native-responsive-dimensions";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../store";
import EmailAddressLogin from "../organisms/EmailAddressLogin";
import PasswordLogin from "../organisms/PasswordLogin";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { handleLogin, isLoading } = useContext(AuthContext);

  const login = () => {
    try {
      if (!email) {
        throw new Error("Email cannot be empty");
      }
      if (!email.includes("@") || !email.includes(".com") || email.length < 5) {
        throw new Error("Enter a valid Email");
      }

      if (!password) {
        throw new Error("Password cannot be empty");
      }
      if (password.length < 6) {
        throw new Error(
          "Password enter a valid password. Password is 6 characters long."
        );
      }
      setLoading(true);
      handleLogin(email, password);
    } catch (error: any) {
      Alert.alert(error.message);
    } finally {
      setLoading(false);
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
                <ScreenName style={styles.screenName}>Login</ScreenName>

                <EmailAddressLogin email={email} setEmail={setEmail} />

                <PasswordLogin password={password} setPassword={setPassword} />

                <SolidGreenButton
                  width={"85%"}
                  height={"17%"}
                  style={{ alignSelf: "center" }}
                  onPress={login}
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
                <TouchableOpacity
                  style={styles.forgetPassword}
                  onPress={() => navigation.navigate("ForgetPassword")}
                >
                  <Text style={styles.forgetPasswordText}>
                    Forget password ?
                  </Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                  <Text style={styles.already_have_an_account}>
                    Don't have an account
                  </Text>

                  <TouchableOpacity
                    onPress={() => navigation.navigate("RegisterPage")}
                  >
                    <Text style={styles.login}>Register</Text>
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

export default Login;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    paddingBottom: "28%",
    // backgroundColor: "black",
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
  forgetPassword: {
    width: "100%",
    height: "10%",
    // backgroundColor: "red",
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  forgetPasswordText: {
    fontSize: 20,
    color: "rgba(38, 174, 96, 1)",
    fontWeight: "600",
  },
});

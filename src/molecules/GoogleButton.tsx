import {
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Body1 } from "../atoms/Typography";
import * as Google from "expo-auth-session/providers/google";
import axios from "axios";
import { BASE_URL } from "../helperFunctions";
import { AuthContext } from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ANDROID_CLIENT_ID, EXPO_CLIENT_ID, IOS_CLIENT_ID } from "@env";

export default function GoogleButton({ navigation }: any) {
  const [accessToken, setAccessToken] = useState<string | any>(null);
  const { setIsLoggedIn } = useContext(AuthContext);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    expoClientId: EXPO_CLIENT_ID,
  });

  const handleRegisterWithGoogle = (
    email: any,
    firstName: any,
    lastName: any,
    googleID: any
  ) => {
    axios
      .post(`https://kenaf.ie/GoogleAPI`, {
        email: email,
        firstName: firstName,
        lastName: lastName,
        google_id: googleID,
      })
      .then((response) => {
        if (response.data.token) {
          AsyncStorage.setItem("token", JSON.stringify(response.data.token));
          AsyncStorage.setItem("uId", JSON.stringify(response.data.user.uId));
          setIsLoggedIn(true);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserData = async () => {
    try {
      const receivedUserData = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      const data = await receivedUserData.json();
      if (data.verified_email) {
        handleRegisterWithGoogle(
          data.email,
          data.given_name,
          data.family_name,
          data.id
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (response?.type === "success") {
      if (response.authentication?.accessToken) {
        setAccessToken(response.authentication?.accessToken);
        accessToken && getUserData();
      }
    }
  }, [response, accessToken]);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        promptAsync();
      }}
    >
      <Image source={require("../../assets/images/GoogleLogo.png")} />
      <Body1 style={{ color: "white", marginLeft: "6%" }}>Google</Body1>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "blue",
    height: "17%",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: "2%",
  },
  button: {
    borderRadius: 2,
    width: "42%",
    height: Platform.OS === "ios" ? "77%" : "36.4%",
    backgroundColor: "#EE3A43",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 15,
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

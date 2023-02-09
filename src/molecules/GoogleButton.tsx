import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  Body1,
  Body2,
  Body3,
  Body6,
  Heading4,
  Heading6,
} from "../atoms/Typography";
import { AuthContext } from "../store";
import * as Google from "expo-auth-session/providers/google";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function GoogleButton() {
  const [token, setToken] = useState<string>();
  const [userInfo, setUserInfo] = useState<any>();
  const { setIsLoggedIn } = useContext(AuthContext);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "1026449685475-u2e04rjo1g0h3uibjqbi1lprisarcjrk.apps.googleusercontent.com",
    iosClientId:
      "1026449685475-vtbgq4tnqh7ecl9m38evrm1rvve9itot.apps.googleusercontent.com",
    expoClientId:
      "1026449685475-7h9steioj713bls2dh72dj08jvpdcv40.apps.googleusercontent.com",
  });

  const sendData = () => {
    axios
      .post("https://kenaf.ie/GoogleAPI", {
        email: userInfo.email,
        firstName: userInfo.given_name,
        lastName: userInfo.family_name,
        google_id: userInfo.id,
      })
      .then(async (response) => {
        console.log(response.data);
        if (response.data) {
          await AsyncStorage.setItem(
            "token",
            JSON.stringify(response.data.user.google_id)
          );
        }
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication?.accessToken);
    }
    token &&
      axios
        .get("https://www.googleapis.com/userinfo/v2/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          console.log(response.data);
          setUserInfo(response.data);
        });
  }, [response, token]);
  userInfo?.verified_email && sendData();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        promptAsync({
          useProxy: true,
          showInRecents: true,
        });
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
    height: Platform.OS === "ios" ? "37%" : "6.4%",
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

import { TouchableOpacity, Image, Platform, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Body1 } from "../atoms/Typography";
import * as Google from "expo-auth-session/providers/google";
import axios from "axios";
import { BASE_URL } from "../helperFunctions";
import { AuthContext } from "../store";

export default function GoogleButton({ navigation }: any) {
  const { handleLogin, isLoading } = useContext(AuthContext);
  const [accessToken, setAccessToken] = useState<string | any>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "1026449685475-7mhb7p5j90d1jukj87jp7pdqakr04m29.apps.googleusercontent.com",
    iosClientId:
      "1026449685475-0flih1m3bcqemittmllq4ocjbko438iq.apps.googleusercontent.com",
    expoClientId:
      "1026449685475-mnqieo55i9db3s60m6h0e5h5c7773jhc.apps.googleusercontent.com",
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
        response.data.token && handleLogin(email, googleID);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserData = async () => {
    try {
      console.log(accessToken);
      const receivedUserData = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      const data = await receivedUserData.json();
      console.log(data);
      if (data.verified_email) {
        handleRegisterWithGoogle(
          data.email,
          data.given_name,
          data.family_name,
          data.id
        );
      } else {
        console.log("Verified email x");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (response?.type === "success") {
      console.log(response);
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
    height: Platform.OS === "ios" ? "37%" : "36.4%",
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

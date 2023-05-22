import { TouchableOpacity, Image, Platform, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Body1 } from "../atoms/Typography";
import * as Google from "expo-auth-session/providers/google";

export default function GoogleButton({ navigation }: any) {
  const [accessToken, setAccessToken] = useState<string | any>(null);
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "1026449685475-7mhb7p5j90d1jukj87jp7pdqakr04m29.apps.googleusercontent.com",
    iosClientId:
      "1026449685475-0flih1m3bcqemittmllq4ocjbko438iq.apps.googleusercontent.com",
    expoClientId:
      "1026449685475-mnqieo55i9db3s60m6h0e5h5c7773jhc.apps.googleusercontent.com",
  });
  // const sendData = () => {
  //   axios
  //     .post("https://kenaf.ie/GoogleAPI", {
  //       email: userInfo.email,
  //       firstName: userInfo.given_name,
  //       lastName: userInfo.family_name,
  //       google_id: userInfo.id,
  //     })
  //     .then(async (response) => {
  //       console.log(response.data);
  //       if (response.data) {
  //         await AsyncStorage.setItem(
  //           "token",
  //           JSON.stringify(response.data.user.google_id)
  //         );
  //       }
  //       setIsLoggedIn(true);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication?.accessToken);
      getUserData();
    }
  }, [response]);

  const getUserData = async () => {
    let receivedUserData = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    receivedUserData.json().then((data) => {
      setUserInfo(data);
      console.log(data.verified_email);
      data.verified_email && navigation.navigate("PasswordGoogle");
    });
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        promptAsync({ useProxy: true, showInRecents: true });
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

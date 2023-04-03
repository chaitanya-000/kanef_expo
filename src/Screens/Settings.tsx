import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import FooterToolBar from "../organisms/FootertoolBar";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import SettingsOptionContainer from "../organisms/SettingsOptionContainer";
import { Heading6 } from "../atoms/Typography";
import { AuthContext } from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import Spinner from "react-native-loading-spinner-overlay/lib";
import * as ImageManipulator from "expo-image-manipulator";

export default function Settings({ navigation }: any) {
  const [userId, setUserId] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 0.7,
      aspect: [1, 1],
    });
    if (!result.canceled) {
      const resizedImage = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 400, height: 400 } }],
        { compress: 0.8 }
      );
      const formData = new FormData();
      formData.append("uId", JSON.parse(userId));
      formData.append("image", {
        uri: resizedImage.uri,
        type: "image/jpeg",
        name: "photo.jpeg",
      });
      setLoading(true);
      fetch("https://kenaf.ie/updateProfilePic", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          getUserInfo();
          Alert.alert(data.message, "", [
            {
              text: "OK",
            },
          ]);
        })
        .catch((error) => {
          setLoading(false);
          alert(error.message);
        });
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("uId");
      if (value !== null) {
        const uid = value;
        setUserId(uid);
      }
    } catch (e) {
      alert(e.message);
    }
  };
  const getUserInfo = () => {
    axios
      .post("https://kenaf.ie/appUserInfo", {
        uId: JSON.parse(userId),
      })
      .then((response) => {
        setProfileImage(response.data.data[0]?.profileimg);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    getData();
    userId && getUserInfo();
  }, [userId, profileImage]);

  return (
    <View style={styles.pageContainer}>
      <Spinner visible={loading} />

      {/* <StatusBar hidden={true} /> */}

      <Heading6 style={{ color: "white" }}>Settings</Heading6>
      <View style={styles.WhiteImageAndOptionsContainer}>
        <TouchableOpacity onPress={selectImageFromGallery}>
          <Image
            source={{
              uri: `https://kenaf.ie/public/images/profile/${profileImage}`,
            }}
            style={styles.ProfileImage}
          />
        </TouchableOpacity>
        <SettingsOptionContainer navigation={navigation} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pageContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#121F27",
  },

  ProfileImage: {
    width: responsiveScreenWidth(37),
    aspectRatio: 1,
    // height: responsiveScreenHeight(16),
    borderWidth: 1,
    borderColor: "black",
    position: "relative",
    bottom: "50%",
    zIndex: 21123,
    alignSelf: "center",
    borderRadius: 80,
  },
  WhiteImageAndOptionsContainer: {
    borderColor: "green",
    borderWidth: 2.2,
    width: "100%",
    height: "78%",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: "relative",
    marginTop: "19%",
    marginBottom: "9%",
  },
});

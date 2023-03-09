import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
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

export default function Settings({ navigation }: any) {
  const [userId, setUserId] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const selectImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
      aspect: [1, 1],
    });
    if (!result.canceled) {
      const formData = new FormData();
      formData.append("uId", JSON.parse(userId));
      formData.append("image", {
        uri: result.assets[0].uri,
        type: "image/jpeg",
        name: "photo.jpg",
      });
      setLoading(true);
      axios({
        method: "post",
        url: "https://kenaf.ie/updateProfilePic",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          getUserInfo();
          Alert.alert(response.data.message, "", [
            {
              text: "OK",
            },
          ]);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
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
      // error reading value
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
    width: responsiveScreenWidth(36),
    height: responsiveScreenHeight(16),
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

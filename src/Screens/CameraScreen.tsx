import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import * as ImagePicker from "expo-image-picker";
import { Body1, Body2, Body4 } from "../atoms/Typography";
import { Entypo } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay/lib";
import OrgNameDropDown from "../organisms/OrgNameDropDown";
import { GreenButton } from "../atoms/GreenButton";

export default function CameraScreen({ navigation }: any) {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState<any>(false);
  const [uId, setUid] = useState("");
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>();

  //ask for camera permission
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  //launch the camera. And then set the image to the clicked image
  const launchCamera = async () => {
    const { assets } = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
    });
    assets[0];
    setImage(assets[0].uri);
  };

  //getting the uid of the logged in user for post request
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("uId");
      if (value !== null) {
        setUid(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  //UseEffect
  useEffect(() => {
    askForCameraPermission();
    getData();
  }, [uId]);

  // What happens when we scan the bar code
  const handleBarCodeScanned = async ({ type, data }: any) => {
    setScanned(true);
    axios
      .post("https://kenaf.ie/Invoice", {
        tID: data,
        uId: JSON.parse(uId),
      })
      .then((response) => {
        const receivedResponseStatus = response.data.status;
        // (response);
        (receivedResponseStatus === "false" &&
          Alert.alert(
            response.data.data,
            "",
            [
              {
                text: "Try Again",
                onPress: () => setScanned(false),
                style: "default",
              },
            ],
            {
              cancelable: true,
            }
          )) ||
          Alert.alert(response.data.data, "", [
            {
              text: "Go to receipts",
              onPress: () => navigation.navigate("My Receipts"),
            },
          ]);
      })
      .catch((error) => {
        error;
      });
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = () => {
    value;
    const formData = new FormData();
    formData.append("orId", value);
    formData.append("uId", JSON.parse(uId));
    formData.append("Invoice", {
      uri: image,
      type: "image/jpeg",
      name: "photo.jpg",
    });
    if (value && image) {
      setLoading(true);
      axios({
        method: "post",
        url: "https://kenaf.ie/PersonalReceipt",
        data: formData,
      })
        .then((response) => {
          response;
          setValue("");
          setImage(null);
          setLoading(false);
          Alert.alert(response.data.data);
        })
        .catch(function (error) {
          error;
          // need handling error
        });
    } else {
      Alert.alert("Select the store & Image. Both are required!");
    }
  };

  // Return the View
  return (
    <View style={styles.container}>
      <Spinner visible={loading} />
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      {scanned && (
        <Button
          title={"Scan again?"}
          onPress={() => setScanned(false)}
          color="tomato"
        />
      )}
      <View style={styles.optionsContainer}>
        <OrgNameDropDown value={value} setValue={setValue} />
        <View style={styles.uploadAndCameraButtons}>
          <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
            <Body2>Upload</Body2>
            <Entypo name="upload" size={25} color="black" />
          </TouchableOpacity>
          <Body1>OR</Body1>
          <TouchableOpacity style={styles.uploadButton} onPress={launchCamera}>
            <Body2>Camera</Body2>
            <Entypo name="camera" size={25} color="black" />
          </TouchableOpacity>
        </View>

        <GreenButton
          height={"20%"}
          marginTop={"15%"}
          width={"62%"}
          onPress={uploadImage}
        >
          <Body1 style={{ color: "white" }}>Save</Body1>
        </GreenButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: responsiveScreenHeight(44),
    width: responsiveScreenWidth(55),
    borderRadius: 30,
    backgroundColor: "#26ae60ed",
    overflow: "hidden",
    // borderWidth: 2,
    borderColor: "gray",
  },
  uploadButton: {
    width: responsiveScreenWidth(35),
    height: responsiveScreenHeight(6),
    backgroundColor: "#e9f2eb",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15,
  },
  optionsContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(30),
    // borderWidth: 2,
    alignItems: "center",
    // justifyContent: "space-between",
  },
  uploadAndCameraButtons: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(10),
    flexDirection: "row",
    // borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-around",
  },
});

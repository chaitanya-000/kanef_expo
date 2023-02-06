import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  Platform,
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
import { Body2, Body4 } from "../atoms/Typography";
import { Entypo } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay/lib";
import Navigation from "../Navigation";

export default function CameraScreen({ navigation }: any) {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState<any>(false);
  const [text, setText] = useState<any>("Not yet scanned");
  const [uId, setUid] = useState("");
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };
  const launchCamera = async () => {
    const { assets } = await ImagePicker.launchCameraAsync();
    console.log(assets[0]);
    setImage(assets[0].uri);
  };

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

  // Request Camera Permission
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
        console.log(response);

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
        console.log(error);
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
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
      {/* <Text style={styles.maintext}>{text}</Text> */}
      {scanned && (
        <Button
          title={"Scan again?"}
          onPress={() => setScanned(false)}
          color="tomato"
        />
      )}

      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Body2>Upload Receipt from gallery</Body2>
        <Entypo name="upload" size={20} color="black" />
      </TouchableOpacity>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <TouchableOpacity style={styles.uploadButton} onPress={launchCamera}>
        <Body2>Click to open camera</Body2>
        <Entypo name="camera" size={20} color="black" />
      </TouchableOpacity>
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
    height: responsiveScreenHeight(46),
    width: responsiveScreenWidth(65),
    borderRadius: 30,
    backgroundColor: "#26ae60ed",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "gray",
  },
  uploadButton: {
    width: responsiveScreenWidth(70),
    height: responsiveScreenHeight(6),
    backgroundColor: "#e9f2eb",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15,
  },
});

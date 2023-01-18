import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState<any>(false);
  const [text, setText] = useState<any>("Not yet scanned");
  const [uId, setUid] = useState("");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
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
      .post("https://jsonplaceholder.typicode.com/posts", {
        QR_ID: data,
        uId: uId,
      })
      .then((response) => {
        console.log(response);
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

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && (
        <Button
          title={"Scan again?"}
          onPress={() => setScanned(false)}
          color="tomato"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
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
});

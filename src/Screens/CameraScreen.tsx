import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner, BarCodeSize } from "expo-barcode-scanner";
import axios from "axios";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

export default function App() {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    setText(data);
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text style={{ margin: 10 }}>No access to camera</Text>;
  }

  const handlePost = () => {
    axios
      .post("https://kenaf.000webhostapp.com/qrcheck", {
        QR_ID: "QR_11153",
        uId: "appUser_",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.request);
      });
  };

  return (
    <View style={styles.container}>
      <Text onPress={handlePost}>click</Text>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 500 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && (
        <Button title={"Scan again?"} onPress={handlePost} color="tomato" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    // backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
  },
  maintext: {
    fontSize: 30,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    // justifyContent: "center",
    height: responsiveScreenHeight(42),
    width: responsiveScreenWidth(80),
    overflow: "hidden",
    borderRadius: 30,
    borderColor: "red",
    borderWidth: 2,
    // backgroundColor: "red",
  },
});

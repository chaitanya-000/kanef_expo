import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
  RefreshControl,
  StatusBar,
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
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import AddStoreModal from "../organisms/AddStoreModal";
import { AntDesign } from "@expo/vector-icons";

export default function CameraScreen({ navigation }: any) {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState<any>(false);
  const [uId, setUid] = useState("");
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>();
  const [refreshing, setRefreshing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //ask for camera permission
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  //launch the camera. And then set the image to the clicked image
  const takePhoto = async () => {
    const { assets } = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [9, 16],

      quality: 0.1,
    });
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
        if (receivedResponseStatus === "true") {
          Alert.alert(
            response.data.data,
            "You can check the Receipts section",
            [
              {
                text: "Ok",
              },
            ]
          );
        } else {
          Alert.alert(response.data.data, "", [
            {
              text: "Try Again",
              onPress: () => setScanned(false),
            },
            {
              text: "Ok",
            },
          ]);
        }
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
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
  const selectImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 0.1,
      allowsEditing: true,
      aspect: [9, 16],
    });
    if (!result.canceled) {
      console.log(result);
      console.log(result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("orId", value);
    formData.append("uId", JSON.parse(uId));
    formData.append("Invoice", {
      uri: image,
      type: "image/jpeg",
      name: "photo.jpeg",
    });
    try {
      if (value && image) {
        setLoading(true);
        fetch("https://kenaf.ie/PersonalReceipt", {
          method: "POST",

          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setValue("");
            setImage(null);
            setLoading(false);
            Alert.alert(data.data);
          })
          .catch((error) => {
            alert(`Message  ${error.message}`);
            alert(` Status ${error.status}`);
            setLoading(false);
            console.log(error);
          });
      } else {
        Alert.alert("Select the store & Image. Both are required!");
      }
    } catch (error) {
      alert(` Catch Block ${error}`);
    }
  };

  // Return the Views
  return (
    <>
      <ScrollView
        contentContainerStyle={
          showModal ? styles.containerWhenModalActive : styles.container
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setImage(null);
              setRefreshing(false);
              setValue(null);
            }}
          />
        }
      >
        <StatusBar hidden={true} />
        <Spinner visible={loading} />
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{
              height: responsiveScreenHeight(60),
              width: responsiveScreenWidth(60),
            }}
          />
        </View>
        {scanned && (
          <Button
            title={"Scan again?"}
            onPress={() => setScanned(false)}
            color="red"
          />
        )}
        <View style={styles.optionsContainer}>
          <View
            style={{
              // borderWidth: 2,
              width: responsiveScreenWidth(85),
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <OrgNameDropDown value={value} setValue={setValue} />
            <Body1>OR</Body1>

            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => setShowModal(!showModal)}
            >
              <Ionicons name="ios-add-circle-sharp" size={24} color="black" />
              <Body4>Add a store</Body4>
            </TouchableOpacity>
          </View>
          <View style={styles.uploadAndCameraButtons}>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={selectImageFromGallery}
            >
              <Body2>Upload</Body2>
              {image ? (
                <AntDesign name="checkcircleo" size={24} color="black" />
              ) : (
                <Entypo name="upload" size={25} color="black" />
              )}
            </TouchableOpacity>
            <Body1>OR</Body1>
            <TouchableOpacity style={styles.uploadButton} onPress={takePhoto}>
              <Body2>Camera</Body2>
              <Entypo name="camera" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <GreenButton
            height={"20%"}
            marginTop={"0%"}
            width={"62%"}
            onPress={uploadImage}
          >
            <Body1 style={{ color: "white" }}>Save</Body1>
          </GreenButton>
        </View>
      </ScrollView>
      {showModal && (
        <AddStoreModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(95),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerWhenModalActive: {
    opacity: 0.8,
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    backgroundColor: "black",
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
    height: responsiveScreenHeight(30),
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
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  uploadAndCameraButtons: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(10),
    flexDirection: "row",
    // borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: responsiveScreenHeight(5),
  },
});

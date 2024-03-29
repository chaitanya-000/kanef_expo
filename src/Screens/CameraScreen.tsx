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
  Platform,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import * as ImagePicker from "expo-image-picker";
import { Body1, Body2, Body4, Heading6 } from "../atoms/Typography";
import { Entypo } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay/lib";
import OrgNameDropDown from "../organisms/OrgNameDropDown";
import { GreenButton } from "../atoms/GreenButton";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import AddStoreModal from "../organisms/AddStoreModal";
import { AntDesign } from "@expo/vector-icons";
import * as ImageManipulator from "expo-image-manipulator";

export default function CameraScreen({ navigation }: any) {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState<any>(false);
  const [uId, setUid] = useState("");
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>();
  const [refreshing, setRefreshing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<any>(null);
  const [showQRScanningCamera, setShowQRScanningCamera] =
    useState<boolean>(false);

  //ask for camera permission
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
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

  const getOrgNames = () => {
    setLoading(true);
    setRefreshing(true);
    axios
      .get("https://kenaf.ie/organizationList")
      .then((response) => {
        setLoading(false);
        setData(response.data.data);
        setRefreshing(false);
      })
      .catch((error) => {
        setLoading(false);
        setRefreshing(false);

        alert(error.message);
      });
  };
  //UseEffect
  useEffect(() => {
    askForCameraPermission();
    getData();
    getOrgNames();
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
                onPress: () => {
                  setShowQRScanningCamera(false);
                  navigation.navigate("My Receipts");
                  setScanned(false);
                },
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
      quality: 1,
      allowsEditing: Platform.OS === "android" ? true : false,
    });
    if (!result.canceled) {
      console.log(result);
      try {
        const { width, height } = result.assets[0];

        // Calculate the desired width and height while maintaining the aspect ratio
        let resizedWidth = width;
        let resizedHeight = height;

        if (width > height) {
          // Landscape image
          if (width > 200) {
            resizedWidth = 200;
            resizedHeight = Math.floor((200 / width) * height);
          }
        } else {
          // Portrait or square image
          if (height > 600) {
            resizedHeight = 600;
            resizedWidth = Math.floor((600 / height) * width);
          }
        }

        const resizedImage = await ImageManipulator.manipulateAsync(
          result.assets[0].uri,
          [{ resize: { width: resizedWidth, height: resizedHeight } }],
          { compress: 1 }
        );
        setImage(resizedImage.uri);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Error in selecting the image");
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
            alert(`Message  ${error}`);
            alert(` Status ${error}`);

            setLoading(false);
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
              getOrgNames();
            }}
          />
        }
      >
        <StatusBar hidden={true} />
        <Spinner visible={loading} />
        <View
          style={{
            width: responsiveScreenWidth(100),
            height: showQRScanningCamera ? "9%" : "25%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.scanQRButton}
            onPress={() => {
              setShowQRScanningCamera(!showQRScanningCamera);
              setScanned(false);
            }}
          >
            <AntDesign
              name="qrcode"
              size={showQRScanningCamera ? 24 : 120}
              color="black"
            />

            <Heading6
              style={{
                fontWeight: "500",
                fontSize: 17,
              }}
            >
              {showQRScanningCamera
                ? "Tap to turn off camera"
                : "Tap to Scan QR code"}
            </Heading6>
          </TouchableOpacity>
        </View>
        {showQRScanningCamera && (
          <View style={styles.barcodebox}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{
                height: responsiveScreenHeight(60),
                width: responsiveScreenWidth(90),
                // borderWidth: 1,
                backgroundColor: "red",
              }}
            />
          </View>
        )}
        {scanned && (
          <Button
            title={"Scan again?"}
            onPress={() => setScanned(false)}
            color="red"
          />
        )}
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsContainer_UploadReceiptText}>
            Upload your paper or e-receipt
          </Text>
          <View style={styles.uploadAndCameraButtons}>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={selectImageFromGallery}
            >
              <Body2>Upload from Camera Roll</Body2>
              {image ? (
                <AntDesign name="checkcircleo" size={24} color="black" />
              ) : (
                <Entypo name="upload" size={25} color="black" />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: responsiveScreenWidth(84),
              flexDirection: "row",
              alignItems: "center",
              marginTop: "10%",
            }}
          >
            <OrgNameDropDown
              value={value}
              setValue={setValue}
              data={data}
              image={image}
            />
            <Body1>OR</Body1>

            <TouchableOpacity
              style={{ alignItems: "center", marginLeft: "14%" }}
              onPress={() => setShowModal(!showModal)}
            >
              <Ionicons name="ios-add-circle-sharp" size={24} color="black" />
              <Body4>Add a store</Body4>
            </TouchableOpacity>
          </View>
          <GreenButton
            height={"20%"}
            marginTop={showQRScanningCamera ? "3%" : "8%"}
            width={"62%"}
            onPress={uploadImage}
          >
            <Body1 style={{ color: "white" }}>Save</Body1>
          </GreenButton>
        </View>
      </ScrollView>
      {showModal && (
        <AddStoreModal
          showModal={showModal}
          setShowModal={setShowModal}
          getOrgNames={getOrgNames}
        />
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
    borderColor: "gray",
  },
  uploadButton: {
    width: responsiveScreenWidth(64),
    height: responsiveScreenHeight(7),
    backgroundColor: "#e9f2eb",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-around",
    justifyContent: "space-evenly",
    // justifyContent: "space-between",
    borderRadius: 15,
  },
  optionsContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(30),
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "30%",
    // borderWidth: 1,
    // backgroundColor: "red",
  },
  uploadAndCameraButtons: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(10),
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-around",
    // borderWidth: 1,
    marginTop: responsiveScreenHeight(3),
  },
  scanQRButton: {
    // borderWidth: 1,
    width: "50%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#e9f2eb",
    borderColor: "gray",
  },
  optionsContainer_UploadReceiptText: {
    fontSize: responsiveFontSize(2.5),
  },
});

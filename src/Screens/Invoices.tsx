import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Body1, Body2 } from "../atoms/Typography";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { Ionicons } from "@expo/vector-icons";

const Invoices = ({ route, navigation }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [receivedData, setReceivedData] = useState<any>(null);
  const [uId, setUid] = useState("");

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("uId");
      if (value !== null) {
        setUid(JSON.parse(value));
      }
    } catch (e) {}
  };

  const getSpecificStore = () => {
    setIsLoading(true);
    uId &&
      axios
        .post("https://kenaf.ie/MyInvoice", {
          uId: uId,
          orName: route.params.storeName,
        })
        .then((response) => {
          console.log(response.data);
          setIsLoading(false);
          setReceivedData(response.data.data);
        })
        .catch((error) => {});
  };
  useEffect(() => {
    getData();
    getSpecificStore();
  }, [uId]);
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar hidden={true} />

      <Spinner visible={isLoading} size="large" />
      <View
        style={{
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(10),
          // borderWidth: 2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            height: "90%",
            // borderWidth: 2,
            flexDirection: "row",
            // justifyContent: "flex-start",
            alignItems: "center",
            // backgroundColor: "red",
          }}
        >
          <TouchableOpacity
            style={{
              height: "60%",
              width: "13%",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              // marginRight: "30%",
              borderWidth: 1,
              borderColor: "rgba(222, 232, 239, 0.1)",
            }}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
          <View
            style={{
              // backgroundColor: "green",
              width: "80%",
              height: "100%",
              alignSelf: "auto",
              justifyContent: "center",
            }}
          >
            <Body1
              style={{
                color: "white",
                alignSelf: "center",
                fontSize: responsiveScreenFontSize(2),
                // backgroundColor: "blue",
              }}
            >
              {route.params.storeName}
            </Body1>
          </View>
        </View>
      </View>
      <View style={styles.WhiteRoundedContainer}>
        <View
          style={{
            width: responsiveScreenWidth(87),
            marginTop: "10%",
            borderRadius: 10,
            alignItems: "center",
            paddingBottom: responsiveScreenHeight(8),
          }}
        >
          <ScrollView
            style={{
              width: responsiveScreenWidth(90),
              // borderWidth: 5,
              paddingBottom: responsiveScreenHeight(10),
            }}
          >
            {receivedData &&
              receivedData.map((eachObj: any) => {
                return (
                  <TouchableOpacity
                    key={Math.random() * 1212121212}
                    style={styles.container}
                    onPress={() => {
                      navigation.navigate("SeperateInvoice", {
                        InvoiceLink: eachObj.InvoiceLink,
                        Date: eachObj.updated_at,
                        StoreName: eachObj.orName,
                      });
                    }}
                  >
                    <Image
                      source={require("../../assets/images/WalmartLogo.jpg")}
                      style={styles.StoreImage}
                    />
                    <View style={styles.NameAndDate}>
                      <Body2>{eachObj.updated_at.split("T")[0]}</Body2>
                    </View>
                    <Feather
                      name="chevron-right"
                      size={25}
                      color="gray"
                      style={styles.rightArrow}
                    />
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenName: {
    color: "white",
    marginBottom: "10%",
    fontSize: responsiveScreenFontSize(3),
  },
  ContentHeader: {
    alignSelf: "flex-start",
    fontWeight: "700",
    // fontSize: "28",
  },
  container: {
    borderWidth: 1,
    width: "100%",
    height: responsiveScreenHeight(9),
    borderRadius: 20,
    flexDirection: "row",
    padding: "3%",
    borderColor: "#dee8ef",
    marginTop: "6%",
  },
  StoreImage: {
    // borderWidth: 1,
    // borderColor: "red",
    width: "18%",
    borderRadius: 10,
    height: "100%",
  },
  NameAndDate: {
    // borderWidth: 1,
    alignSelf: "flex-end",
    borderColor: "orange",
    width: "40%",
    flex: 1,
    justifyContent: "space-around",
    height: "95%",
    marginLeft: "3.5%",
  },
  rightArrow: {
    // borderWidth: 1,
    borderColor: "green",
    width: "10%",
    alignSelf: "center",
  },
  ScreenContainer: {
    backgroundColor: "#121f27",
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  WhiteRoundedContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(87),
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
  },
});

export default Invoices;

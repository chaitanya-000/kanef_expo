import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Body1,
  Body2,
  Body5,
  Heading1,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "../atoms/Typography";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import {
  Item,
  OptionsContainer,
  ScreenContainer,
  WhiteRoundedContainer,
} from "../styledComponents/Receipts,Reward,BillPage";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "react-native-loading-spinner-overlay/lib";
import * as ImagePicker from "expo-image-picker";

const MyReceipts = ({ navigation }: any) => {
  const [uId, setUid] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [receivedData, setReceivedData] = useState<any>(null);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("uId");
      if (value !== null) {
        setUid(JSON.parse(value));
      }
    } catch (e) {}
  };

  const getStores = () => {
    setIsLoading(true);
    uId &&
      axios
        .post("https://kenaf.ie/MyReceiptList", {
          uId: uId,
        })
        .then((response) => {
          setIsLoading(false);
          setReceivedData(response.data.data);
        })
        .catch((error) => {});
  };

  useEffect(() => {
    getData();
    getStores();
  }, [uId]);
  return (
    <ScreenContainer>
      <Spinner visible={isLoading} animation="fade" size="large" />
      <Body1 style={styles.ScreenName}>My Receipts</Body1>
      <WhiteRoundedContainer>
        <OptionsContainer>
          <Heading5 style={styles.ContentHeader}>Receipts</Heading5>
          <ScrollView style={{ width: responsiveScreenWidth(90) }}>
            {receivedData &&
              receivedData.map((eachObj: { orName: string }, key: number) => {
                return (
                  <TouchableOpacity
                    style={styles.container}
                    onPress={() => {
                      navigation.navigate("Invoices", {
                        storeName: eachObj.orName,
                      });
                    }}
                    key={Math.random() * 10000000000}
                  >
                    <Image
                      source={require("../../assets/images/WalmartLogo.jpg")}
                      style={styles.StoreImage}
                    />
                    <View style={styles.NameAndDate}>
                      <Text>{eachObj.orName}</Text>
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
        </OptionsContainer>
      </WhiteRoundedContainer>
    </ScreenContainer>
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
});

export default MyReceipts;

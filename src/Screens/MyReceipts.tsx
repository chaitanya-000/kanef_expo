import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  StatusBar,
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

const MyReceipts = ({ navigation }: any) => {
  const [uId, setUid] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [receivedData, setReceivedData] = useState<any>(null);
  const [refreshing, setRefreshing] = useState(false);

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
    setRefreshing(true);
    uId &&
      axios
        .post("https:kenaf.ie/MyReceiptList", {
          uId: uId,
        })
        .then((response) => {
          console.log(response.data);
          setRefreshing(false);
          setIsLoading(false);
          setReceivedData(response.data.data);
        })
        .catch((error) => {
          setIsLoading(false);
          alert(error.message);
        });
  };

  useEffect(() => {
    getData();
    getStores();
  }, [uId]);
  return (
    <View style={styles.parentContainer}>
      <View style={styles.screenName}>
        <Body1
          style={{ color: "white", fontSize: responsiveScreenFontSize(3) }}
        >
          My Receipts
        </Body1>
      </View>
      <View style={styles.WhiteRoundedContainer}>
        <Body5
          style={{ fontSize: responsiveScreenFontSize(4), fontWeight: "800" }}
        >
          Receipts
        </Body5>
        <ScrollView
          bounces={true}
          style={styles.scrollViewParentContainer}
          contentContainerStyle={{
            // height: "120%",
            width: "100%",
            backgroundColor: "white",
            paddingBottom: responsiveScreenHeight(25),
            borderWidth: 2,
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getStores} />
          }
        >
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    backgroundColor: "#121F27",
  },
  screenName: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(13),
    justifyContent: "center",
    alignItems: "center",
  },
  WhiteRoundedContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "white",
    padding: responsiveScreenWidth(8),
  },
  scrollViewParentContainer: {
    height: "120%",
    width: "100%",
    backgroundColor: "white",
  },
  scrollList: {
    backgroundColor: "green",
    width: "100%",
    height: "80%",
  },
  storeButton: {
    width: "100%",
    borderWidth: 2,
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
    // borderColor: "bor",
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

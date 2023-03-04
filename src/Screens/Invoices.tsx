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
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay/lib";

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
          //
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
    <ScreenContainer>
      <StatusBar hidden={true} />

      <Spinner visible={isLoading} animation="fade" size="large" />
      <Body1 style={styles.ScreenName}>My Receipts</Body1>
      <WhiteRoundedContainer>
        <View
          style={{
            width: responsiveScreenWidth(87),
            height: responsiveScreenHeight(80),
            marginTop: "10%",
            borderRadius: 20,
            alignItems: "center",
            // borderWidth: 10,
          }}
        >
          <Heading5 style={styles.ContentHeader}>
            {route.params.storeName}
          </Heading5>
          <ScrollView style={{ width: responsiveScreenWidth(90) }}>
            {receivedData &&
              receivedData.map((eachObj: any) => {
                return (
                  <TouchableOpacity
                    key={Math.random() * 1212121212}
                    style={styles.container}
                    onPress={() => {
                      navigation.navigate("SeperateInvoice", {
                        InvoiceLink: eachObj.InvoiceLink,
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

export default Invoices;

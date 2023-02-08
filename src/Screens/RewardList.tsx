import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useId, useState } from "react";
import { Body1, Body2, Body5, Heading4, Heading5 } from "../atoms/Typography";
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
import RewardScreenModal from "../organisms/RewardScreenModal";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "react-native-loading-spinner-overlay/lib";

const RewardList = () => {
  const [showModal, setShowModal] = useState(false);
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
        .post("https://kenaf.ie/MyRewardtList", {
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
    <>
      <Spinner visible={isLoading} animation="fade" size="large" />
      <ScreenContainer>
        <Body1 style={styles.ScreenName}>Reward List</Body1>

        <WhiteRoundedContainer
          style={showModal ? { opacity: 0.8 } : { opacity: 1 }}
        >
          <OptionsContainer>
            <Heading5 style={styles.ContentHeader}>Rewards</Heading5>
            <ScrollView style={{ width: responsiveScreenWidth(90) }}>
              {receivedData &&
                receivedData.map((eachObj: any, key: number) => {
                  return (
                    <TouchableOpacity
                      style={styles.container}
                      onPress={() => setShowModal(!showModal)}
                      key={key}
                    >
                      <Image
                        source={require("../../assets/images/KingFisherLogo.png")}
                        style={styles.StoreImage}
                      />
                      <View style={styles.NameAndType}>
                        <Body2>{eachObj.mainOrName}</Body2>
                        <Body5 style={{ color: "gray" }}>
                          {eachObj.updated_at.split("T")[0]}
                        </Body5>
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
      {showModal && (
        <RewardScreenModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
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
  NameAndType: {
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

export default RewardList;

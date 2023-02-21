import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Body3, Body4, Body6 } from "../atoms/Typography";

const AddStoreModal = ({ showModal, setShowModal }: any) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setShowModal(false)}
    >
      <Pressable style={styles.modal} onPress={() => setShowModal(true)}>
        <View style={styles.modal_BrandName}>
          <Text
            style={{ fontSize: responsiveFontSize(2.6), fontWeight: "700" }}
          >
            Add store
          </Text>
          <View>
            <AntDesign
              name="close"
              size={25}
              color="black"
              onPress={() => setShowModal(false)}
            />
          </View>
        </View>
        <View style={styles.textInputAndButton}>
          <TextInput style={styles.textInput} />
          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={{
              backgroundColor: "#26ae60ed",

              height: "50%",
              width: "18%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: responsiveFontSize(2.3),
                fontWeight: "900",
              }}
            >
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </TouchableOpacity>
  );
};

export default AddStoreModal;

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    display: "flex",
    alignItems: "center",
    position: "absolute",
    // justifyContent: "center",
    // backgroundColor: "red",
  },
  modal: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(20),
    // borderWidth: 3,
    marginTop: responsiveScreenHeight(30),
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 15,
    padding: "4%",
    backgroundColor: "#fff",
    // borderColor: "green",
  },
  modal_BrandName: {
    width: "100%",
    height: "25%",
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 2,
  },
  textInput: {
    width: "80%",
    backgroundColor: "#e9f2eb",
    height: "64%",
    borderRadius: 10,
    paddingHorizontal: "5%",
    fontSize: responsiveFontSize(2.6),
  },
  textInputAndButton: {
    width: "100%",
    height: "60%",
    flexDirection: "row",
    // borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

import { Alert, Platform, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { Dropdown } from "react-native-element-dropdown";
import { AuthContext } from "../store";

const OrgNameDropDown = ({ value, setValue }: any) => {
  // const [data, setData] = useState<any>(null);
  const [loading, setIsLoading] = useState(false);
  const { getOrgNames, data } = useContext(AuthContext);

  useEffect(() => {
    getOrgNames();
  }, [data]);

  return (
    data && (
      <>
        <Spinner visible={loading} />

        <Dropdown
          keyboardAvoiding
          activeColor="#26ae60ed"
          search
          searchPlaceholder="Enter store name"
          placeholder="Select Store"
          data={data}
          style={
            Platform.OS === "android"
              ? styles.dropDownAndroid
              : styles.dropDownIOS
          }
          labelField="mainOrName"
          valueField="mainOrId"
          containerStyle={styles.dropDownContainer}
          backgroundColor={`rgba(0,0,0,0.8)`}
          value={value}
          onChange={(data) => {
            setValue(data.mainOrId);
          }}
        />
      </>
    )
  );
};

export default OrgNameDropDown;

const styles = StyleSheet.create({
  dropDownAndroid: {
    width: responsiveScreenWidth(40),
    borderRadius: 10,
    height: responsiveScreenHeight(6),
    paddingHorizontal: responsiveScreenWidth(5),
    borderColor: "#e9f2eb",
    borderWidth: 3,
  },
  dropDownIOS: {
    width: responsiveScreenWidth(40),
    borderRadius: 10,
    height: responsiveScreenHeight(6),

    paddingHorizontal: responsiveScreenWidth(5),
    borderColor: "#e9f2eb",
    borderWidth: 3,
  },

  dropDownContainer: {
    marginTop: responsiveScreenHeight(0.5),
    height: responsiveScreenHeight(35),
    borderWidth: 2,
    borderRadius: 10,
    paddingBottom: "10%",
  },
  emptyList: {
    paddingHorizontal: responsiveScreenWidth(5),
    alignItems: "center",
    height: responsiveScreenHeight(5),
    justifyContent: "center",
  },
});

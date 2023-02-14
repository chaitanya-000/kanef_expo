import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { create } from "zustand";
import React, { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext<any>(null);
export const AuthProvider = ({ children }: any) => {
  const BASE_URL = `https://kenaf.ie`;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uId, setUid] = useState();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        setIsLoggedIn(true);
        setUid(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  const handleLogin = (email: string, password: string) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/applogincheckusers`, {
        email: email,
        password: password,
      })
      .then((response) => {
        setIsLoading(false);
        if (response.data.token) {
          AsyncStorage.setItem("token", JSON.stringify(response.data.token));
          AsyncStorage.setItem("uId", JSON.stringify(response.data.user.uId));
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        Alert.alert(error.response.data.message[0]);

        setIsLoading(false);
      });
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const googleAuth = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        getData,
        isLoggedIn,
        setIsLoggedIn,
        handleLogout,
        isLoading,
        setIsLoading,
        googleAuth,
        uId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
password: "123213123@chaitanya";

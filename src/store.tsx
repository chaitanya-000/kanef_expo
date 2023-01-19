import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { create } from "zustand";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);
export const AuthProvider = ({ children }: any) => {
  const BASE_URL = `https://kenaf.ie`;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        setIsLoggedIn(true);
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
        console.log(response);
        if (response.data.token) {
          setIsLoading(false);
          console.log(response.data.user.uId);
          AsyncStorage.setItem("token", JSON.stringify(response.data.token));
          AsyncStorage.setItem("uId", JSON.stringify(response.data.user.uId));
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    AsyncStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsLoading(true);
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        getData,
        isLoggedIn,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

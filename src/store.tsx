import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { create } from "zustand";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);
export const AuthProvider = ({ children }: any) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const register = (
    firstName: string,
    lastName: string,
    email: string,
    password: string | number
  ) => {
    setIsLoading(true);
    axios
      .post("http://127.0.0.1:8000/appuserregister", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        let receivedResponse = response.data;
        setUserInfo(receivedResponse);
        AsyncStorage.setItem("userInfo", userInfo);
        setIsLoading(false);
        console.log(receivedResponse);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
    console.log("clicked");
  };

  return (
    <AuthContext.Provider value={{ register, isLoading, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

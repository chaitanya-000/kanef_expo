import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { create } from "zustand";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);
export const AuthProvider = ({ children }: any) => {
  return <AuthContext.Provider value="22e2">{children}</AuthContext.Provider>;
};
// const register = (
//   firstName: string,
//   lastName: string,
//   email: string,
//   password: string | number
// ) => {
//   setIsLoading(true);
//   axios
//     .post("http://127.0.0.1:8000/appuserregister", {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//     })
//     .then((res) => {
//       let userInfo = res.data;
//       setUserInfo(userInfo);
//       AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
//       setIsLoading(false);
//       console.log(userInfo);
//     })
//     .catch((e) => {
//       console.log(`register error ${e}`);
//       setIsLoading(false);
//     });

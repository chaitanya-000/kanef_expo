import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { create } from "zustand";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);
export const AuthProvider = ({ children }: any) => {
  const [hasLoggedInBefore, setHasLoggedInBefore] = useState(false);
  const handleLogin = (email: string, password: string) => {
    axios
      .post("http://127.0.0.1:8000/applogincheckusers", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.token) {
          AsyncStorage.setItem("token", JSON.stringify(response.data.token));
          AsyncStorage.setItem("keepLoggedIn", JSON.stringify(true));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogout = async () => {
    AsyncStorage.setItem("token", "");
    AsyncStorage.setItem("keepLoggedIn", "");
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        hasLoggedInBefore,
        setHasLoggedInBefore,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

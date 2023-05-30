import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./organisms/TabsNavigator";
import Invoices from "./Screens/Invoices";
import Home from "./Screens/Home";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./store";
import AccountSettingsScreen from "./Screens/AccountSettingsScreen";
import SeperateInvoice from "./Screens/SeperateInvoice";
import FeedbackScreen from "./Screens/FeedbackScreen";
import ContactUsScreen from "./Screens/ContactUsScreen";
import TermsAndConditions from "./Screens/TermsAndConditions";
import PrivacyPolicy from "./Screens/PrivacyPolicy";
import BankDetailsScreen from "./Screens/BankDetailsScreen";
import UpdateBankDetails from "./Screens/UpdateBankDetails";
import VerifyOtp from "./Screens/VerifyOtp";
import ForgetPassword from "./Screens/ForgetPassword";
import UpdatePassword from "./Screens/UpdatePassword";
import PasswordGoogle from "./Screens/PasswordGoogle";
import Help from "./Screens/Help";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  const {
    hasLoggedInBefore,
    setHasLoggedInBefore,
    userInfo,
    getData,
    isLoggedIn,
  } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Settings" component={TabsNavigator} />
            <Stack.Screen name="My Receipts" component={TabsNavigator} />
            {/* <Stack.Screen name="RewardLists" component={TabsNavigator} /> */}
            {/* <Stack.Screen name="RewardCard" component={TabsNavigator} /> */}
            <Stack.Screen name="Camera" component={TabsNavigator} />
            <Stack.Screen name="Invoices" component={Invoices} />
            <Stack.Screen name="SeperateInvoice" component={SeperateInvoice} />
            <Stack.Screen
              name="AccountSettingsScreen"
              component={AccountSettingsScreen}
            />
            <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
            <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
            <Stack.Screen
              name="TermsAndConditions"
              component={TermsAndConditions}
            />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen
              name="BankDetailsScreen"
              component={BankDetailsScreen}
            />

            <Stack.Screen
              name="UpdateBankDetails"
              component={UpdateBankDetails}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RegisterPage" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

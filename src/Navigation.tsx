import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./store";
import TabsNavigator from "./organisms/TabsNavigator";
import Invoices from "./Screens/Invoices";
import Home from "./Screens/Home";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const [loggedIn, setLoggedIn] = useState<any>(false);

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {loggedIn ? (
            <>
              <AuthProvider>
                <Stack.Screen name="Settings" component={TabsNavigator} />
                <Stack.Screen name="My Receipts" component={TabsNavigator} />
                <Stack.Screen name="RewardLists" component={TabsNavigator} />
                <Stack.Screen name="RewardCard" component={TabsNavigator} />
                <Stack.Screen name="Camera" component={TabsNavigator} />
                <Stack.Screen name="Invoices" component={Invoices} />
              </AuthProvider>
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="RegisterPage" component={Register} />
              <Stack.Screen name="Login" component={Login} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

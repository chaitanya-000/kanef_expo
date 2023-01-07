import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import Login from "./src/Screens/Login";
import MyReceipts from "./src/Screens/MyReceipts";
import Register from "./src/Screens/Register";
import RewardCard from "./src/Screens/RewardCard";
import RewardList from "./src/Screens/RewardList";
import Settings from "./src/Screens/Settings";
import TabsNavigator from "./src/organisms/TabsNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import { lazy, useState } from "react";
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // screenOptions={{
        //   headerShown: false,
        // }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RegisterPage" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Settings" component={TabsNavigator} />
        <Stack.Screen name="My Receipts" component={TabsNavigator} />
        <Stack.Screen name="RewardLists" component={TabsNavigator} />
        <Stack.Screen name="RewardCard" component={TabsNavigator} />
        <Stack.Screen name="Camera" component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

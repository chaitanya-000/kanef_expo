import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../Screens/Settings";
import MyReceipts from "../Screens/MyReceipts";
import RewardList from "../Screens/RewardList";
import RewardCard from "../Screens/RewardCard";
import Camera from "../Screens/Camera";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Rewards"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#26AE60",
        tabBarStyle: {
          paddingHorizontal: 17,
          paddingBottom: 10,
          height: 60,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
        tabBarLabelStyle: {
          fontSize:
            Platform.OS === "ios"
              ? responsiveHeight(1.1)
              : responsiveHeight(1.2),
          fontWeight: "bold",
          color: "#BDBDBD",
        },
      }}
    >
      <Tab.Screen
        name="Reward Card"
        component={RewardCard}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={{
                width: responsiveHeight(3),
                height: responsiveHeight(3.5),
              }}
              source={
                focused
                  ? require("../../assets/images/RewardCardFocused.png")
                  : require("../../assets/images/RewardCardLogo.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Receipts"
        component={MyReceipts}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={{
                width: responsiveHeight(3),
                height: responsiveHeight(3.5),
              }}
              source={
                focused
                  ? require("../../assets/images/ReceiptLogoFocused.png")
                  : require("../../assets/images/ReceiptLogo.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={{
                width: responsiveHeight(3),
                height: responsiveHeight(3.5),
              }}
              source={
                focused
                  ? require("../../assets/images/CameraLogo.png")
                  : require("../../assets/images/CameraLogo.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={RewardList}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={{ width: responsiveHeight(3), height: 30 }}
              source={
                focused
                  ? require("../../assets/images/RewardLogoFocused.png")
                  : require("../../assets/images/RewardLogo.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={{
                width: responsiveHeight(3),
                height: responsiveHeight(3.5),
              }}
              source={
                focused
                  ? require("../../assets/images/SettingsLogoFocused.png")
                  : require("../../assets/images/SettingsLogo.png")
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

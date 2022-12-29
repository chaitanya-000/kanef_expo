import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../Screens/Settings";
import MyReceipts from "../Screens/MyReceipts";
import RewardList from "../Screens/RewardList";
import RewardCard from "../Screens/RewardCard";
import Camera from "../Screens/Camera";

const Tab = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="RewardCard"
        component={RewardCard}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyReceipts"
        component={MyReceipts}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="RewardList"
        component={RewardList}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../Screens/Settings";
import MyReceipts from "../Screens/MyReceipts";
import RewardList from "../Screens/RewardList";
import RewardCard from "../Screens/RewardCard";

const Tab = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="RewardCard" component={RewardCard} />
      <Tab.Screen name="MyReceipts" component={MyReceipts} />
      <Tab.Screen name="RewardList" component={RewardList} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

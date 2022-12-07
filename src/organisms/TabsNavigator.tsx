import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../Screens/Settings";
import MyRewards from "../Screens/MyRewards";
import MyReceipts from "../Screens/MyReceipts";

const Tab = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Rewards" component={MyRewards} />
      <Tab.Screen name="Receipts" component={MyReceipts} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({});

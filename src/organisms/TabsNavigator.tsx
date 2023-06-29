import { Image, Platform, Text } from "react-native";
import React, { Suspense, lazy } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../Screens/Settings";
import MyReceipts from "../Screens/MyReceipts";
import { responsiveHeight } from "react-native-responsive-dimensions";
const CameraScreen = lazy(() => import("../Screens/CameraScreen"));

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Tab.Navigator
        initialRouteName="Camera"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#26AE60",
          tabBarStyle: {
            paddingHorizontal: 17,
            paddingBottom: 10,
            height: responsiveHeight(11),
            shadowColor: "grey",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.31,
            shadowRadius: 6.65,
            elevation: 9,
          },
          tabBarLabelStyle: {
            fontSize:
              Platform.OS === "ios"
                ? responsiveHeight(1.1)
                : responsiveHeight(1.2),
            fontWeight: "bold",
            color: "#BDBDBD",
            height: responsiveHeight(5),
          },
        }}
      >
        {/* <Tab.Screen
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
        /> */}
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
          component={CameraScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                style={{
                  width: responsiveHeight(3.7),
                  height: responsiveHeight(3.1),
                }}
                source={
                  focused
                    ? require("../../assets/images/CameraLogoFocused.png")
                    : require("../../assets/images/CameraLogo.png")
                }
              />
            ),
          }}
        />

        {/* <Tab.Screen
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
        /> */}
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
    </Suspense>
  );
};

export default TabsNavigator;

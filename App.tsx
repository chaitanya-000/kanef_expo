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
import { lazy, useEffect, useState } from "react";
import Invoices from "./src/Screens/Invoices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthProvider } from "./src/store";
import Navigation from "./src/Navigation";

export default function App() {
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
}

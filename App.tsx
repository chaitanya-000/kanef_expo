import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import Login from "./src/Screens/Login";
import MyReceipts from "./src/Screens/MyReceipts";
import Register from "./src/Screens/Register";
import RewardCard from "./src/Screens/RewardCard";
import RewardList from "./src/Screens/RewardList";
import Settings from "./src/Screens/Settings";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="RegisterPage" component={Register} /> */}
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Settings" component={Settings} />
        {/* <Stack.Screen name="My Receipts" component={MyReceipts} /> */}
        {/* <Stack.Screen name="My Receipts" component={RewardList} /> */}
        {/* <Stack.Screen name="My Receipts" component={RewardCard} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./src/Pages/Register";
import Home from "./src/Pages/Home";
import Login from "./src/Pages/Login";
import FooterToolBar from "./src/organisms/FootertoolBar";
import Settings from "./src/Pages/Settings";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="RegisterPage" component={Register} /> */}
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /* <View>
  <LoginPage />
</View> */
}

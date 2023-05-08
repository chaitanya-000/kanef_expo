import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./src/store";
import Navigation from "./src/Navigation";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

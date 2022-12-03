import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GoogleButton from "./src/atoms/molecules/GoogleButton";
import OutlinedGreenButton from "./src/atoms/molecules/OutlinedGreenButton";
import SolidGreenButton from "./src/atoms/molecules/SolidGreenButton";

export default function App() {
  return (
    <View style={styles.container}>
      <GoogleButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

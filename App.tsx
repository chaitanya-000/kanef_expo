import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SolidGreenButton from "./src/atoms/SolidGreenButton";

export default function App() {
  return (
    <View style={styles.container}>
      <SolidGreenButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

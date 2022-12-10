import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import GoogleButton from "../molecules/GoogleButton";
import AppleButton from "../molecules/AppleButton";

export default function GoogleAndAppleButton() {
  return (
    <View style={styles.container}>
      <GoogleButton />
      <AppleButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "blue",
    height: "17%",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: "2%",
  },
});

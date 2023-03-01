import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";

export default function GoogleAndAppleButton() {
  if (Platform.OS === "ios") {
    return (
      <View style={styles.container}>
        {/* <GoogleButton /> */}
        {/* <AppleButton /> */}
      </View>
    );
  } else {
    // return <GoogleButton />;
  }
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

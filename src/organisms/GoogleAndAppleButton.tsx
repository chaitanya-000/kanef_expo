import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import GoogleButton from "../molecules/GoogleButton";

export default function GoogleAndAppleButton({ navigation }: any) {
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" ? (
        <>
          <GoogleButton navigation={navigation} />
        </>
      ) : (
        <GoogleButton navigation={navigation} />
      )}
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
    // marginTop: "2%",
  },
});

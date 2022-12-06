import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { StyleSheet, View } from "react-native";

const HorizontalDividerLine = () => {
  return <View style={styles.container}></View>;
};

export default HorizontalDividerLine;
const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(0.2),
    backgroundColor: "#E0E0E0",
  },
});

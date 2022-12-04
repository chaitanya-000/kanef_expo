import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";

const LoginImageWithLogo = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/myLoginImage.png")}
      style={styles.image}
    >
      <Image
        source={require("../../assets/images/KanefRegisterPageLogo.png")}
        style={styles.logo}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    position: "relative",
    opacity: 1,
  },
  logo: {
    position: "absolute",
    top: "20%",
    left: "44%",
    opacity: 1,
  },
});

export default LoginImageWithLogo;

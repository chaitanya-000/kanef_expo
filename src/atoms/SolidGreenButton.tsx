import {
  View,
  Text,
  TouchableOpacityComponent,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { GreenButton } from "./GreenButton";
import { BoldWhiteText } from "./Typography";

export default function SolidGreenButton({ navigation }: any) {
  return (
    <GreenButton
      height={"40%"}
      width={"86%"}
      marginTop={"0"}
      onPress={() => navigation.navigate("RegisterPage")}
    >
      <BoldWhiteText>Sign up</BoldWhiteText>
    </GreenButton>
  );
}

// onPress={() => navigation.navigate("RegisterPage")}

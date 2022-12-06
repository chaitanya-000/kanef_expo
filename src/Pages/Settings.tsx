import React from "react";
import { Text, View } from "react-native";
import {
  Body1,
  Body2,
  Body3,
  Body4,
  Body5,
  Body6,
  Display1,
  Display2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../atoms/Typography";

const Settings = () => {
  return (
    <View>
      <Display1>Display 01</Display1>
      <Display2>Display 02</Display2>
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4>Heading 4</Heading4>
      <Heading5>Heading 5</Heading5>
      <Body1>Body 1</Body1>
      <Body2>Body 2</Body2>
      <Body3>Body 3</Body3>
      <Body4>Body 4</Body4>
      <Body5>Body 5</Body5>
      <Body6>Body 6</Body6>
    </View>
  );
};

export default Settings;

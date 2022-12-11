import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import styled from "styled-components/native";

export const WhiteRoundedContainer = styled.View`
  width: ${responsiveScreenWidth(100)};
  height: ${responsiveScreenHeight(83)};
  border-radius: 30px;
  background-color: white;
  align-items: center;
`;

export const ScreenContainer = styled.View`
  background-color: #121f27;
  width: ${responsiveScreenWidth(100)};
  height: ${responsiveScreenHeight(100)};
  justify-content: flex-end;
  align-items: center;
`;

export const OptionsContainer = styled.View`
  width: ${responsiveScreenWidth(87)};
  height: ${responsiveScreenHeight(70)};
  /* border-color: #dee8ef; */
  border:1px solid black;
  margin-top:10%
  border-radius:20px;
  align-items:center;
  /* flex: 1 */
`;

export const Item = styled.View``;

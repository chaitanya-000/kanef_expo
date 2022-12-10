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
`;

export const PageContainer = styled.View`
  background-color: #121f27;
  width: ${responsiveScreenWidth(100)};
  height: ${responsiveScreenHeight(100)};
  justify-content: flex-end;
  align-items: center;
`;

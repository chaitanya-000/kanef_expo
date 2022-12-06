import styled from "styled-components/native";
import { Text } from "react-native";

export const H3Tag = styled.Text`
  font-size: 30px;
  font-weight: bold;
  align-self: flex-start;
`;

export const BoldWhiteText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.color || "white"};
`;

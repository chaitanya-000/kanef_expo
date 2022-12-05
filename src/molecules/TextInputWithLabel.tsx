import styled from "styled-components/native";
import { View, TextInput } from "react-native";

export const InputContainerWithLabel = styled.View`
  width: 50%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TextInputBox = styled.TextInput`
  width: 100%;
  height: 70%;
  background-color: #f6f8fa;
  border-radius: 16px;
  font-size: 18px;
  padding: 10%;
  font-color: #828282;
  border: 1px solid #dee8ef;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #828282;
  font-weight: 500;
`;

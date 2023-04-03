import styled from "styled-components/native";

export const DeleteAccountButton = styled.TouchableOpacity`
  /* border: 2px solid red; */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 14px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.marginTop};
`;

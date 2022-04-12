import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100px;
  padding: 0 12px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Text = styled.Text`
  color: #000;
`;

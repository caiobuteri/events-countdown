import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 30%;
  padding: 0 12px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(40)}px;
  color: white;
`;

export const HeaderInformation = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(12)}px;
  color: white;
`;

export const Content = styled.View`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 24px;
`;

export const InputContainer = styled.View`
  display: flex;

  width: 100%;
`;

export const Text = styled.Text``;

export const Button = styled(RectButton)<any>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 50px;

  border-radius: 5px;
  margin-top: 15px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonText = styled.Text`
  color: #fff;
`;

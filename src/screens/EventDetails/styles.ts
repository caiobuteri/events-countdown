import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

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
  justify-content: space-between;

  width: 100%;
  height: 70%;
  padding: 24px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const InformationsContainer = styled.View``;

export const TitleInContent = styled.Text`
  margin-top: 20px;

  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(12)}px;
`;

export const DescriptionInContent = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

export const DeleteContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const DeleteButton = styled(RectButton)`
  width: 60px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

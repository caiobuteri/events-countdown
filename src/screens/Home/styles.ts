import { FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { EventDTO } from "../../dto/EventDTO";

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

export const AppointmentsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  margin-top: 10px;
  margin-left: 12px;
`;

export const EventList = styled(FlatList as new () => FlatList<EventDTO>).attrs(
  {
    contentContainerStyle: {
      padding: 12,
    },
    showsVerticalScrollIndicator: false,
  }
)``;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const MyCarsButton = styled(RectButton)`
  width: 60px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 30px;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 22px;
  right: 22px;
`;

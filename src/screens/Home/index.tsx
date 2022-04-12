import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

import { useEvent } from "../../hooks/useEvent";

import { Event } from "../../Components/Event";

import {
  Container,
  Header,
  HeaderTitle,
  HeaderInformation,
  EventList,
  MyCarsButton,
  Separator,
  AppointmentsTitle,
} from "./styles";

export function Home() {
  const navigation = useNavigation();
  const { events } = useEvent();
  const theme = useTheme();

  const handleOpenByCars = () => {
    navigation.navigate("AddEvent");
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderTitle>to.do</HeaderTitle>
        <HeaderInformation>Você tem {events.length} eventos</HeaderInformation>
      </Header>

      <AppointmentsTitle>Próximos eventos</AppointmentsTitle>

      {events.length > 0 && (
        <EventList
          data={events}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Event
              data={item}
              onPress={() =>
                navigation.navigate("EventDetails", { event: item })
              }
            />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      )}

      <MyCarsButton onPress={handleOpenByCars}>
        <Feather name="plus" size={32} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  );
}

import React from "react";
import { Keyboard, StatusBar, TouchableWithoutFeedback } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

import { useEvent } from "../../hooks/useEvent";
import { EventDTO } from "../../dto/EventDTO";

import {
  Container,
  Header,
  HeaderInformation,
  HeaderTitle,
  Content,
  TitleInContent,
  DescriptionInContent,
  DeleteContainer,
  DeleteButton,
  InformationsContainer,
} from "./styles";

interface Params {
  event: EventDTO;
}

export function EventDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { deleteEvent } = useEvent();

  const { event } = route.params as Params;

  const handleDeleteEvent = () => {
    console.log("chegou aqui");
    deleteEvent(event.id);
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Header>
          <HeaderTitle>to.do</HeaderTitle>
          <HeaderInformation>{event.title}</HeaderInformation>
        </Header>

        <Content>
          <InformationsContainer>
            <TitleInContent>Descrição do evento:</TitleInContent>
            <DescriptionInContent>{event.description}</DescriptionInContent>
            <TitleInContent>Data do evento:</TitleInContent>
            <DescriptionInContent>{event.date}</DescriptionInContent>
          </InformationsContainer>

          <DeleteContainer>
            <DeleteButton>
              <AntDesign
                name="delete"
                size={24}
                color="white"
                onPress={handleDeleteEvent}
              />
            </DeleteButton>
          </DeleteContainer>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}

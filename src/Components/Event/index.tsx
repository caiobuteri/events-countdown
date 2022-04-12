import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import diff from "date-fns/differenceInCalendarDays";

import { EventDTO } from "../../dto/EventDTO";

import { Container, Text } from "./styles";

interface Props extends RectButtonProps {
  data: EventDTO;
}

export function Event({ data, ...rest }: Props) {
  const [date, month, year] = data.date.split("/");

  const today = new Date();
  const eventDate = new Date(Number(year), Number(month) - 1, Number(date));

  const sub = diff(eventDate, today);

  return (
    <Container {...rest}>
      <Text>{data.title}</Text>
      <Text>Faltam {sub} dias</Text>
    </Container>
  );
}

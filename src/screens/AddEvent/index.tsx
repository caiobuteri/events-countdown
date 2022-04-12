import React, { useState } from "react";
import { Keyboard, StatusBar, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DatePicker from "react-native-datepicker";

import { useForm } from "react-hook-form";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import uuidv4 from "react-native-uuid";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { useEvent } from "../../hooks/useEvent";

import { InputForm } from "../../Components/InputForm";

import { EventDTO } from "../../dto/EventDTO";

import {
  Container,
  Header,
  HeaderInformation,
  HeaderTitle,
  Text,
  Content,
  Button,
  ButtonText,
  InputContainer,
} from "./styles";

interface FormData {
  title: string;
  description: string;
}

const schema = Yup.object().shape({
  title: Yup.string().required("Nome é obrigatório"),
  description: Yup.string().required("Nome é obrigatório"),
});

console.log(
  Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date())
);

export function AddEvent() {
  const [date, setDate] = useState(
    Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date())
  );

  const navigation = useNavigation();
  const { addEvent } = useEvent();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (form: FormData) => {
    const uuid = uuidv4.v4().toString();

    const newEvent: EventDTO = {
      id: uuid,
      title: form.title,
      description: form.description,
      date,
    };

    addEvent(newEvent);
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
          <HeaderInformation>
            Pronto para registrar um novo evento? :)
          </HeaderInformation>
        </Header>

        <Content>
          <InputContainer>
            <Text>Título do evento:</Text>
            <InputForm
              control={control}
              name="title"
              error={errors.title && errors.title.message}
            />
          </InputContainer>

          <InputContainer>
            <Text>Descrição do evento:</Text>
            <InputForm
              control={control}
              name="description"
              error={errors.description && errors.description.message}
            />
          </InputContainer>

          <InputContainer>
            <Text>Data do evento:</Text>
            <DatePicker
              date={date}
              onDateChange={(date) => setDate(date)}
              format="DD/MM/YYYY"
              style={{ width: "100%" }}
              minDate={Intl.DateTimeFormat("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }).format(new Date())}
            />
          </InputContainer>

          <Button onPress={handleSubmit(onSubmit)}>
            <ButtonText>Cadastrar</ButtonText>
          </Button>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}

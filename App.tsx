import React from "react";
import { ThemeProvider } from "styled-components/native";
import "react-native-gesture-handler";

import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";

import AppLoading from "expo-app-loading";

import { Routes } from "./routes";
import { EventProvider } from "./src/hooks/useEvent";

import theme from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <EventProvider>
        <Routes />
      </EventProvider>
    </ThemeProvider>
  );
}

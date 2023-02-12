import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

import Routes from "./src/routes";
import light from "./src/Theme/light";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Hide the splash screen after the fonts have loaded and the
      // UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Prevent rendering until the font has loaded
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={() => light}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}

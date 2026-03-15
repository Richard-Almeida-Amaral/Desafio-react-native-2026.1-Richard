import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    FontTitle: require("../assets/fonts/fontTitle/CinzelDecorative-Regular.ttf"),
    FontTitleBold: require("../assets/fonts/fontTitle/CinzelDecorative-Bold.ttf"),
    FontSubtitle: require("../assets/fonts/fontSubtitle/Cinzel-Regular.ttf"),
    FontSubtitleBold: require("../assets/fonts/fontSubtitle/Cinzel-Bold.ttf"),
    FontText: require("../assets/fonts/fontText/HammersmithOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name="index"/>
    <Stack.Screen name="tabs"/>
  </Stack>;
}
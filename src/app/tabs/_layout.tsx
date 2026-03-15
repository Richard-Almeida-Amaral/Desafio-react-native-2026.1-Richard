import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
    return <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" />
        <Stack.Screen name="Builds" />
        <Stack.Screen name="Contact" />
    </Stack>;
}
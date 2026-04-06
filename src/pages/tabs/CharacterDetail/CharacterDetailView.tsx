import React from "react";
import { View, Text, Image, ImageBackground, StatusBar } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { styles } from "./styles";

import { characters } from "@/data/character";

export default function CharacterDetailView() {
    const { name } = useLocalSearchParams();

    const character = characters.find(
        (c) => c.name === name
    );

    if (!character) {
        return (
            <View>
                <Text>Personagem não encontrado</Text>
            </View>
        );
    }

    return (
        <ImageBackground
            source={require("@/assets/images/siteImages/KomiImpactBackground.jpg")}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>

                <View style={styles.container}>

                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {character.name}
                        </Text>
                    </View>

                    <Image source={character.avatar} style={styles.avatar} />

                    <View style={styles.infoBox}>
                        <Text style={styles.label}>Elemento</Text>
                        <Image source={character.vision} style={styles.vision} />
                    </View>

                    <View style={styles.infoBox}>
                        <Text style={styles.label}>Raridade</Text>
                        <Text style={styles.value}>
                            {character.stars} ★
                        </Text>
                    </View>

                </View>
            </View>
        </ImageBackground>
    );
}
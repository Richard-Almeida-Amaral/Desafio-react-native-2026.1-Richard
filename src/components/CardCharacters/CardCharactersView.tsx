import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";

type CardCharactersProps = {
    name: string;
    stars: number;
    avatar: any;
    vision: any;
};

export function CardCharactersView({
    name,
    stars,
    avatar,
    vision,
}: CardCharactersProps) {

    const rarityColors = {
        5: Colors.gold_3,
        4: Colors.purple_1,
    };

    const backgroundColor = rarityColors[stars];

    const renderStars = () => {
        return Array.from({ length: stars }).map((_, index) => (
            <Ionicons key={index} name="star" size={16} color="gold" />
        ));
    };

    return (
        <TouchableOpacity style={styles.characterConteiner}>
            <View style={[styles.imageCharacter, { backgroundColor }]}>
                <Image source={avatar} style={styles.imageContainer} />
            </View>

            <View style={styles.infoCharacter}>
                <View style={styles.nameCharacter}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{name}</Text>
                    </View>

                    <View style={styles.starsCharacters}>
                        {renderStars()}
                    </View>
                </View>

                <View style={styles.visionCharacter}>
                    <Image source={vision} style={styles.visionContainer} />
                </View>
            </View>
        </TouchableOpacity>
    );
}
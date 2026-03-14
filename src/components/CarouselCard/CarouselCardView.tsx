import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";

interface CardCarouselProps {
    title: string;
    subtitle: string;
    backgroundImage: any;
}

export function CardCarouselView({
    title,
    subtitle,
    backgroundImage,
}: CardCarouselProps) {
    return (
        <TouchableOpacity style={styles.carouselContainer} activeOpacity={0.9}>
            <ImageBackground
                source={backgroundImage}
                style={styles.imageBackground}
                imageStyle={styles.image}
            >
                <View style={styles.overlay}>
                    <View style={styles.textContainer}>
                        <Text style={styles.carouselTitle}>{title}</Text>
                        <Text style={styles.carouselSubtitle}>{subtitle}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}
import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";

interface CardContactsProps {
    title: string;
    subtitle: string;
    iconName: keyof typeof Ionicons.glyphMap;
    iconColor?: string;
}

export function CardContactsView({
    title,
    subtitle,
    iconName,
    iconColor = "white",
}: CardContactsProps) {
    return (
        <TouchableOpacity style={styles.contactsContainer}>
            <View style={styles.iconContainer}>
                <Ionicons name={iconName} size={50} color={iconColor} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.contactTitle}> {title} </Text>
                <Text style={styles.contactSubtitle}> {subtitle} </Text>
            </View>
        </TouchableOpacity>
    );
}
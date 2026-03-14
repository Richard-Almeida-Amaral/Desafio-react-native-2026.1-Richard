import React, { useState } from "react";
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

type Props = {
    title: string;
    content: string;
};

export function CollapsibleCard({ title, content }: Props) {
    const [open, setOpen] = useState(false);

    function toggleCard() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpen(!open);
    }

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.header} onPress={toggleCard}>
                <Text style={styles.title}>{title}</Text>

                <Ionicons
                    name={open ? "chevron-up" : "chevron-down"}
                    size={24}
                    color="white"
                />
            </TouchableOpacity>

            {open && (
                <View style={styles.content}>
                    <Text style={styles.text}>{content}</Text>
                </View>
            )}
        </View>
    );
}
import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type Props = {
    id: string;
    titulo: string;
    avatar: any;
    vision: any;
    onPress?: () => void;
};

const ListItens = ({ id, titulo, avatar, vision, onPress }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.id}>{id}</Text>

            <Image source={avatar} style={styles.avatar} />

            <Text style={styles.titulo} numberOfLines={1}>
                {titulo}
            </Text>

            <Image source={vision} style={styles.vision} />

            <TouchableOpacity onPress={onPress}>
                <Ionicons name="eye-outline" size={22} color="#EAE6F5" />
            </TouchableOpacity>
        </View>
    );
};

export default ListItens;
import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";

export function InputFormView(props: InputFormView) {
    return (
        <View style={styles.formContainer}>
        <Text style={styles.formText}>
            {props.formPlaceholder}
        </Text>
        </View>
    );
}
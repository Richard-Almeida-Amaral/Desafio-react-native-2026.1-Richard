import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";

export function LightPageDefaultView() {
    return (
        <ImageBackground 
            source={require("@/assets/images/siteImages/KomiImpactBackground.jpg")} 
            style={styles.background}
            resizeMode="cover">
        <View style={styles.overlay}>    
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
            <View style={styles.container}>

            <Text style={styles.textPlaceholder}>Página padrão</Text>


            </View>
        </View>
        </ImageBackground>
    );
}
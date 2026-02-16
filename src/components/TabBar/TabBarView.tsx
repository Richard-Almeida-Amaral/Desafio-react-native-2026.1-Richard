import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";

export function TabBarView() {
    return (
        <View style={styles.container}>
            <View style={styles.homeButton}>
                <View style={styles.homeIcon}></View>
                <Text style={styles.homeText}> Home </Text>
            </View>
            <View style={styles.buildButton}></View>
            <Image source={require("@/assets/images/siteImages/KomiImpactLogo.png")} style={styles.logoImage}/>
            <View style={styles.contactsButton}></View>
            <View style={styles.userButton}></View>
        </View>
    );
}
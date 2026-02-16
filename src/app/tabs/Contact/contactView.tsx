import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";
import { CardContactsView } from "@/components/CardContacts/CardContactsView"

export function ContactView() {
    return (
        <ImageBackground 
            source={require("@/assets/images/siteImages/KomiImpactBackground.jpg")} 
            style={styles.background}
            resizeMode="cover">
        <View style={styles.overlay}>    
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
            <View style={styles.container}>
                <View style={styles.topPage}></View>
                <View style={styles.contactContainer}>
                    <CardContactsView title="Email" subtitle="komi.impact@contato.com" iconName="mail-outline"></CardContactsView>
                    <CardContactsView title="Discord" subtitle="komi.impact/join" iconName="logo-discord"></CardContactsView>
                    <CardContactsView title="Instagram" subtitle="@komi.impact" iconName="logo-instagram"></CardContactsView>
                    <CardContactsView title="X/Twitter" subtitle="@komi.impact" iconName="logo-x"></CardContactsView>
                </View>
                <View style={styles.tabBarPlaceholder}></View>


            </View>
        </View>
        </ImageBackground>
    );
}
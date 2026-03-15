import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export function TabBarView() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>{router.push("/tabs/Home")}}>
                <Ionicons name="home-outline" size={30} color="#F2F1F6"></Ionicons>
                <Text style={styles.text}> Home </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{router.push("/tabs/Builds")}}>
                <Ionicons name="bookmarks-outline" size={30} color="#F2F1F6"></Ionicons>
                <Text style={styles.text}> Builds </Text>
            </TouchableOpacity>
            <Image source={require("@/assets/images/siteImages/KomiImpactLogo.png")} style={styles.logoImage}/>
            <TouchableOpacity style={styles.button} onPress={()=>{router.push("/tabs/Contacts")}}>
                <Ionicons name="chatbubbles-outline" size={30} color="#F2F1F6"></Ionicons>
                <Text style={styles.text}> Contato </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{router.push("/auth/Login")}}>
                <Ionicons name="person-circle-outline" size={30} color="#F2F1F6"></Ionicons>
                <Text style={styles.text}> Login </Text>
            </TouchableOpacity>
        </View>
    );
}
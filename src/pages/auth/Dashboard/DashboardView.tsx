import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export function DashboardView() {
    return (
        <ImageBackground 
            source={require("@/assets/images/siteImages/KomiImpactBackground.jpg")} 
            style={styles.background}
            resizeMode="cover">
        <View style={styles.overlay}>    
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
            <View style={styles.container}>
                <TouchableOpacity style={styles.dashboardButton} onPress={()=>{router.push("/tabs/Home")}}>
                    <Ionicons name="home-outline" size={80} color="#F2F1F6"></Ionicons>
                    <Text style={styles.textDashboard}>HOME</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.dashboardButton} onPress={()=>{router.push("/auth/Management")}}>
                    <Ionicons name="bookmarks-outline" size={80} color="#F2F1F6"></Ionicons>
                    <Text style={styles.textDashboard}>BUILDS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.dashboardButton} onPress={()=>{router.push("/auth/Login")}}>
                    <Ionicons name="exit-outline" size={80} color="#F2F1F6"></Ionicons>
                    <Text style={styles.textDashboard}>SAIR</Text>
                </TouchableOpacity>
            
            </View>
        </View>
        </ImageBackground>
    );
}
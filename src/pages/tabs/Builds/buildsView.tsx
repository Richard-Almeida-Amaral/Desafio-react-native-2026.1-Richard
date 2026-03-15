import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar, FlatList } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";
import { CardCharactersView } from "@/components/CardCharacters/CardCharactersView"
import { TabBarView } from "@/components/TabBar/TabBarView";
import { characters } from "@/data/character";

export function BuildsView() {
    return (
        <ImageBackground
            source={require("@/assets/images/siteImages/KomiImpactBackground.jpg")}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

                <View style={styles.container}>
                    <View style={styles.topPage}></View>

                    <View style={styles.content}>
                        <FlatList
                            data={characters}
                            keyExtractor={(item) => item.name}
                            contentContainerStyle={styles.buildsContent}
                            renderItem={({ item }) => (
                                <CardCharactersView
                                    name={item.name}
                                    stars={item.stars}
                                    avatar={item.avatar}
                                    vision={item.vision}
                                />
                            )}
                        />
                    </View>
                    <TabBarView />
                </View>
            </View>
        </ImageBackground>
    );
}
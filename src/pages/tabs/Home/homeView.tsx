import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { TabBarView } from "@/components/TabBar/TabBarView";
import { characters } from "@/data/character";
import { CardCharactersView } from "@/components/CardCharacters/CardCharactersView";
import { CardContactsView } from "@/components/CardContacts/CardContactsView";
import { CollapsibleCard } from "@/components/CollapsibleCard/CollapsibleCardView";
import { CardCarouselView } from "@/components/CarouselCard/CarouselCardView";
import { router } from "expo-router";

export function HomeView() {
    return (
        <ImageBackground
            source={require("@/assets/images/siteImages/KomiImpactBackground.jpg")}
            style={styles.background}
            resizeMode="cover">
            <View style={styles.overlay}>
                <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
                <View style={styles.container}>
                    <View style={styles.topPage}></View>
                    <View style={styles.content}>
                        <ScrollView style={styles.mainContainer}
                            contentContainerStyle={styles.containerContent}>
                            <View style={styles.destaquesTextContainer}>
                                <Text style={styles.destaquesText}>DESTAQUES</Text>
                            </View>
                            <View style={styles.carossel}>
                                <ScrollView horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={styles.carouselContent}>
                                    <CardCarouselView
                                        title="Bem-vindo"
                                        subtitle="O Komi Impact é um app com foco em Genshin Impact, contendo builds e uma página de blogs e publicações dos usuários, aproveite a jornada Viajante"
                                        backgroundImage={require("@/assets/images/siteImages/KomiImpactHeroSection1.png")}
                                    />
                                    <CardCarouselView
                                        title="Builds Atualizadas"
                                        subtitle="Confira as melhores builds da versão atual"
                                        backgroundImage={require("@/assets/images/siteImages/BuildHeroSection.png")}
                                    />
                                    <CardCarouselView
                                        title="Saiba mais"
                                        subtitle="Sugestões, dúvidas ou ideias são sempre bem-vindas. Como diria a Guilda de Aventureiros: “Ad astra abyssosque!” — descubra mais e entre em contato conosco"
                                        backgroundImage={require("@/assets/images/siteImages/ContactHeroSection.jpg")}
                                    />
                                </ScrollView>
                            </View>
                            <View style={styles.destaques}>
                                <View style={styles.charactersCorrossel}>
                                    <TouchableOpacity style={styles.textContainer} onPress={()=>router.push("/tabs/Builds")}>
                                        <Text style={styles.textHome}>BUILDS</Text>
                                        <Ionicons name={"chevron-forward-outline"} size={20} color={Colors.white_1} />
                                    </TouchableOpacity>
                                    <ScrollView horizontal
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={styles.carouselContent}>
                                        <CardCharactersView {...characters[0]} />
                                        <CardCharactersView {...characters[1]} />
                                        <CardCharactersView {...characters[2]} />
                                        <CardCharactersView {...characters[3]} />
                                    </ScrollView>
                                </View>

                                <View style={styles.MvvContent}>
                                    <CollapsibleCard
                                        title="Missão"
                                        content="Oferecer uma plataforma clara, organizada e acessível para jogadores encontrarem builds, informações e recomendações sobre personagens. Nosso objetivo é reunir conhecimento útil da comunidade e apresentá-lo de forma simples, ajudando tanto jogadores iniciantes quanto experientes a entender melhor o potencial de cada personagem."
                                    />
                                    <CollapsibleCard
                                        title="Visão"
                                        content="Tornar-se uma referência confiável para consulta de builds e estratégias, reunindo informações atualizadas e bem estruturadas em um único lugar. Buscamos evoluir constantemente o projeto para acompanhar as mudanças do jogo e as descobertas da comunidade, mantendo sempre a qualidade e a utilidade do conteúdo."
                                    />
                                    <CollapsibleCard
                                        title="Valores"
                                        content="Valorizamos a clareza das informações, a organização do conteúdo e o respeito ao tempo do jogador. Acreditamos na importância da colaboração da comunidade, da transparência nas recomendações e do compromisso em manter o conteúdo atualizado e útil para quem deseja aprender, experimentar novas builds e melhorar sua experiência no jogo."
                                    />

                                </View>

                                <View style={styles.contactsHome}>
                                    <TouchableOpacity style={styles.textContainer} onPress={()=>router.push("/tabs/Contacts")}>
                                        <Text style={styles.textHome}>CONTATOS</Text>
                                        <Ionicons name={"chevron-forward-outline"} size={20} color={Colors.white_1} />
                                    </TouchableOpacity>
                                    <CardContactsView title="Email" subtitle="komi.impact@contato.com" iconName="mail-outline"></CardContactsView>
                                    <CardContactsView title="Discord" subtitle="komi.impact/join" iconName="logo-discord"></CardContactsView>
                                    <CardContactsView title="Instagram" subtitle="@komi.impact" iconName="logo-instagram"></CardContactsView>
                                    <CardContactsView title="X/Twitter" subtitle="@komi.impact" iconName="logo-x"></CardContactsView>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <TabBarView></TabBarView>
                </View>

            </View>
        </ImageBackground>
    );
}
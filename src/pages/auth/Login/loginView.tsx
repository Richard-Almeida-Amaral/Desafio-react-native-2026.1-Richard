import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";
import { InputFormView } from "@/components/InputForm/InputFormView"

export const GradientText = (props) => {
    return (
    <MaskedView maskElement={<Text {...props} />}>
        <LinearGradient
        colors={[Colors.white_1, Colors.purple_4, Colors.purple_2]} // Do roxo para o azul
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
        </LinearGradient>
    </MaskedView>
    );
};

export function LoginView() {
    return (
        <ImageBackground 
            source={require("@/assets/images/siteImages/KomiImpactBackground.jpg")} 
            style={styles.background}
            resizeMode="cover">
        <View style={styles.overlay}>    
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
            <View style={styles.container}>
                <View style={styles.topPage}></View>
                <View style={styles.logoConteiner}>
                <Image source={require("@/assets/images/siteImages/KomiImpactLogo.png")} style={styles.logoImage}/>
                <GradientText style={styles.title}>KOMI IMPACT</GradientText>
                </View>
                <View style={styles.formsContainer}>
                    <Text style={styles.loginTitle}>LOGIN</Text>
                    <Text style={styles.loginSubtitle}>Digite duas credenciais para continuar</Text>
                    <InputFormView formPlaceholder="Digite seu email..."></InputFormView>
                    <InputFormView formPlaceholder="Digite sua senha..."></InputFormView>
                    <View style={styles.registerForm}>
                        <Text style={styles.rigisterTitle}>Não possui reigistro?</Text>
                        <Text style={styles.registerSubtitle}>Registre-se</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ImageBackground>
    );
}
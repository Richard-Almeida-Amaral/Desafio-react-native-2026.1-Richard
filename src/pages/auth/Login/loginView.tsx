import React, { useState } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";
import { InputFormView } from "@/components/InputForm/InputFormView";
import { router } from "expo-router";

export const GradientText = (props) => {
    return (
    <MaskedView maskElement={<Text {...props} />}>
        <LinearGradient
        colors={[Colors.white_1, Colors.purple_4, Colors.purple_2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
        </LinearGradient>
    </MaskedView>
    );
};

export function LoginView() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                    <Image 
                        source={require("@/assets/images/siteImages/KomiImpactLogo.png")} 
                        style={styles.logoImage}
                    />
                    <GradientText style={styles.title}>KOMI IMPACT</GradientText>
                </View>

                <View style={styles.formsContainer}>
                    <Text style={styles.loginTitle}>LOGIN</Text>
                    <Text style={styles.loginSubtitle}>
                        Digite suas credenciais para continuar
                    </Text>

                    <InputFormView
                        value={email}
                        onChangeText={setEmail}
                        formPlaceholder="Digite seu email..."
                    />

                    <InputFormView
                        value={password}
                        onChangeText={setPassword}
                        formPlaceholder="Digite sua senha..."
                    />

                    <View style={styles.registerForm}>
                        <Text style={styles.rigisterTitle}>
                            Não possui registro?
                        </Text>

                        <TouchableOpacity onPress={() => {
                            router.push("/auth/Register")
                        }}>
                            <Text style={styles.registerSubtitle}>
                                Registre-se
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity 
                        style={styles.buttonLogin} 
                        onPress={() => {
                            console.log(email, password);
                            router.push("/auth/Dashboard");
                        }}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
        </ImageBackground>
    );
}
import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";

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

export function SplashView() {
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
          style={styles.logoImage}/>
          <GradientText style={styles.title}>KOMI IMPACT</GradientText>
        </View>
        <View style={styles.formsContainer}>
            <TouchableOpacity style={styles.buttonGuest}>
              <Text style={styles.buttonText}>ENTRAR COMO CONVIDADO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>       
      </View>
    </View>
    </ImageBackground>
  );
}
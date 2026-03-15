import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";
import { width, height } from "@/constants/Dimenions";
import { Background } from "@react-navigation/elements";

export const styles = StyleSheet.create({
    characterConteiner: {
        flexDirection: "row",
        backgroundColor: Colors.purple_4,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: width * 0.04,
        borderRadius: 16,
        width: width * 0.9,
        height: height * 0.2,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'rgba(242, 241, 246, 0.2)',
        gap: width * 0.03,
    },

    imageCharacter: {
        height: "100%",
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.gold_3,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
    },
    
    imageContainer: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
    },
    

    infoCharacter: {
        flexDirection: "row",
        height: "100%",
        width: "60%",
        backgroundColor: Colors.purple_3,
        borderTopEndRadius: 16,
        borderEndEndRadius: 16,
    },
    
    nameCharacter: {
        height: "100%",
        width: "70%",
        alignItems: "center",
        justifyContent: "center",
    },

    nameContainer: {
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "flex-end",
    },

    name: {
        fontFamily: "FontText",
        fontSize: 18,
        color: Colors.white_1,
    },

    starsCharacters: {
        flexDirection: "row",
        width: "100%",
        height: "50%",
        justifyContent: "center",
    },

    visionCharacter: {
        height: "100%",
        width: "25%",
        alignItems: "center",
        justifyContent: "center",
    },

    visionContainer: {
        width: "100%",
        resizeMode: "contain",
    },

});
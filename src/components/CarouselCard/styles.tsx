import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";
import { width, height } from "@/constants/Dimenions";

export const styles = StyleSheet.create({

    carouselContainer: {
        width: width * 0.9,
        height: height * 0.25,
        borderRadius: 18,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.2)",
    },

    imageBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        resizeMode: "cover",
    },

    overlay: {
        flex: 1,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.35)",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },

    textContainer: {
        alignItems: "center",
        gap: 8,
    },

    carouselTitle: {
        fontFamily: "FontTitleBold",
        fontSize: 22,
        color: Colors.white_1,
        textAlign: "center",
    },

    carouselSubtitle: {
        fontFamily: "FontText",
        fontSize: 14,
        color: Colors.white_1,
        textAlign: "center",
        opacity: 0.9,
    },

});
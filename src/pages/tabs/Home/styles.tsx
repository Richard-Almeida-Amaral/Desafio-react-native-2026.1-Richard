import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";
import { width, height } from "@/constants/Dimenions";
import { Background } from "@react-navigation/elements";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },

    overlay: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(46, 37, 66, 0.80)",
    },

    topPage: {
        width: "100%",
        height: height * 0.1,
    },

    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    content:{
        width: "100%",
        height: height * 0.8,
    },

    mainContainer: {
        flex: 1,
    },

    containerContent: {
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    carossel: {
        width: "100%",
        height: height * 0.3,
        justifyContent: "center",
        alignItems: "center",
    },

    destaques: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    destaquesTextContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
    },

    destaquesText: {
        fontFamily: "FontTitleBold",
        fontSize: 32,
        color: Colors.white_1,
    },

    textContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(75, 58, 106, 0.6)",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'rgba(242, 241, 246, 0.2)',
    },

    textHome: {
        fontFamily: "FontSubtitleBold",
        fontSize: 20,
        color: Colors.white_1,
    },

    charactersCorrossel: {
        width: "100%",
        gap: 20,
        paddingVertical: 20
    },

    carouselContent: {
        alignItems: "center",
        gap: 20,
        paddingHorizontal: 20,
    },

    contactsHome: {
        width: "100%",
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },

    MvvContent: {
        width: "100%",
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
});
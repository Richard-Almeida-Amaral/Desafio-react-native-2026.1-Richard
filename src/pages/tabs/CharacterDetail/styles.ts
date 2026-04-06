import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },

    overlay: {
        flex: 1,
        backgroundColor: "rgba(46, 37, 66, 0.85)",
    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },

    header: {
        marginBottom: 20,
    },

    title: {
        fontSize: 28,
        color: Colors.white_1,
        fontFamily: "FontTitleBold",
    },

    avatar: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },

    infoBox: {
        width: "80%",
        backgroundColor: "rgba(255,255,255,0.1)",
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
        alignItems: "center",
    },

    label: {
        color: Colors.white_1,
        fontSize: 14,
        marginBottom: 5,
    },

    value: {
        color: Colors.white_1,
        fontSize: 18,
        fontWeight: "bold",
    },

    vision: {
        width: 40,
        height: 40,
    },
});
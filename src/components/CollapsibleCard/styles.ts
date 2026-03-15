import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";
import { width, height } from "@/constants/Dimenions";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "rgba(75, 58, 106, 0.8)",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: width * 0.05,
        borderRadius: 16,
        width: width * 0.9,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'rgba(242, 241, 246, 0.2)',
    },

    header: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },

    title: {
        fontFamily: "FontTitleBold",
        fontSize: 16,
        color: Colors.white_1,
    },

    content: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },

    text: {
        fontFamily: "FontText",
        fontSize: 14,
        color: Colors.white_1,
    },
});
import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";
import { width, height } from "@/constants/Dimenions";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.15)",
    },

    id: {
        width: 35,
        color: "#EAE6F5",
        fontWeight: "600",
    },

    avatar: {
        width: 32,
        height: 32,
        marginRight: 8,
    },

    titulo: {
        flex: 1,
        color: "#EAE6F5",
        fontWeight: "600",
    },

    data: {
        width: 90,
        color: "#EAE6F5",
        textAlign: "right",
        marginRight: 10,
    },

    vision: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
});
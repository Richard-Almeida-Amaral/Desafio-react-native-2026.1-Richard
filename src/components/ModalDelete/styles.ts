import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";
import { width, height } from "@/constants/Dimenions";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
        justifyContent: "center",
        alignItems: "center",
    },

    container: {
        width: "80%",
        backgroundColor: "#7A6A9E",
        borderRadius: 16,
        padding: 16,
    },

    header: {
        backgroundColor: "#3A2F5A",
        color: Colors.white_1,
        textAlign: "center",
        paddingVertical: 12,
        borderRadius: 10,
        fontWeight: "bold",
        marginBottom: 15,
    },

    box: {
        backgroundColor: "#B9ACD0",
        padding: 20,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 15,
    },

    text: {
        color: "#2E2545",
        fontWeight: "600",
    },

    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    confirm: {
        backgroundColor: "#BFA37A",
        padding: 12,
        borderRadius: 10,
        flex: 1,
        marginRight: 5,
        alignItems: "center",
    },

    cancel: {
        backgroundColor: "#C62828",
        padding: 12,
        borderRadius: 10,
        flex: 1,
        marginLeft: 5,
        alignItems: "center",
    },

    buttonText: {
        color: Colors.white_1,
        fontWeight: "bold",
    },
});
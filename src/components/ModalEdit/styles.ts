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
        width: "85%",
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
        marginBottom: 10,
    },

    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    info: {
        color: Colors.white_1,
        fontSize: 12,
    },

    image: {
        width: "100%",
        height: 120,
        borderRadius: 12,
        marginBottom: 10,
    },

    label: {
        color: Colors.white_1,
        marginTop: 6,
    },

    input: {
        backgroundColor: "#B9ACD0",
        padding: 10,
        borderRadius: 10,
        color: "#2E2545",
    },

    closeButton: {
        marginTop: 15,
        backgroundColor: "#6C5A91",
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
    },

    buttonText: {
        color: Colors.white_1,
        fontWeight: "bold",
    },
});
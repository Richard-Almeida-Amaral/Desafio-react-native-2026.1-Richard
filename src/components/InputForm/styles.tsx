import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";
import { width, height } from "@/constants/Dimenions";

export const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: Colors.white_1,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: width * 0.05,
        borderRadius: 16,
        width: width * 0.8,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'rgba(242, 241, 246, 0.2)',
    },
    formText: {
        fontFamily: "FontTitleBold",
        fontSize: 12,
        color: Colors.purple_3,
    },
});
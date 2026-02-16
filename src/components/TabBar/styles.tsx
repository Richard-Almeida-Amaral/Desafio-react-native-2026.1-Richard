import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";
import { width, height } from "@/constants/Dimenions";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: height * 0.1,
        justifyContent: "center",
        alignItems: "center",
    },
    logoImage: {
        width: "24%",
        height: height * 0.12,
        resizeMode: "contain",
    },
    button: {
        width: "19%",
        height: height * 0.1,
        justifyContent: "center",
        alignItems: "center",
        gap: "5",
    },
    text: {
        height: "30%",
        fontFamily: "FontTitleBold",
        fontSize: 12,
        color: Colors.white_1,
    }
});
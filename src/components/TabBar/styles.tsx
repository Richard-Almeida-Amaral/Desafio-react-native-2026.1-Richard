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
        backgroundColor: "red"
    },
    logoImage: {
        width: "24%",
        height: height * 0.12,
        resizeMode: "contain",
    },
    homeButton: {
        width: "19%",
        height: height * 0.1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
    },
    buildButton: {
        width: "19%",
        height: height * 0.1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
    },
    contactsButton: {
        width: "19%",
        height: height * 0.1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
    },
    userButton: {
        width: "19%",
        height: height * 0.1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    homeIcon: {
        height: "70%",
        width: "100%",
        backgroundColor: "white",
    },
    homeText: {
        height: "30%",
        fontFamily: "FontTitleBold",
        fontSize: 12,
        color: Colors.white_1,
    }
});
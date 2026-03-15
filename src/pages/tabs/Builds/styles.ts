import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";
import { width, height } from "@/constants/Dimenions";

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

    content:{
        width: "100%",
        height: height * 0.8,
    },

    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    buildsList: {
        flex: 1,
        
    },

    buildsContent: {
        alignItems: "center",
        paddingVertical: 20,
        gap: 16,
    },
});
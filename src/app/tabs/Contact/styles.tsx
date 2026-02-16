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
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    topPage: {
        width: "100%",
        height: height * 0.1,
    },
    contactContainer: {
        width: "100%",
        height: height * 0.8,
        justifyContent: "space-between",
        alignItems: "center",
        padding: width * 0.1,
    },
    tabBarPlaceholder: {
        width: "100%",
        height: height * 0.1,
        backgroundColor: Colors.purple_1,
    }

});
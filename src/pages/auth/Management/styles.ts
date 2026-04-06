import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";
import { width, height } from "@/constants/Dimenions";
import { Background } from "@react-navigation/elements";

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
        paddingTop: 60,
        paddingHorizontal: 12,
    },
    topPage: {
        width: "100%",
        height: height * 0.1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(58, 47, 90, 0.9)",
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    headerId: {
        width: 35,
        color: Colors.white_1,
        fontWeight: "bold",
    },
    headerTitulo: {
        flex: 1,
        color: Colors.white_1,
        fontWeight: "bold",
    },
    headerData: {
        width: 90,
        color: Colors.white_1,
        textAlign: "right",
        marginRight: 10,
        fontWeight: "bold",
    },
    listContent: {
        paddingBottom: 20,
        backgroundColor: "rgba(255,255,255,0.05)",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    textPlaceholder: {
        fontFamily: "FontTitleBold",
        fontSize: 20,
        color: Colors.white_1,
    },
});
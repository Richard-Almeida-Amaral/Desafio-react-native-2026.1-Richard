import { StyleSheet } from "react-native";
import { Colors } from "@/theme/colors";
import { width, height } from "@/constants/Dimenions";

export const styles = StyleSheet.create({
    contactsContainer: {
        flexDirection: "row",
        backgroundColor: "rgba(123, 92, 255, 0.6)",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: width * 0.05,
        borderRadius: 16,
        width: width * 0.9,
        height: height * 0.15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'rgba(242, 241, 246, 0.2)',
    },
    iconContainer: {
        height: "100%",
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    infoContainer: {
        height: "100%",
        width: "70%",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: width * 0.02,
        gap: 10,
    },
    contactTitle: {
        fontFamily: "FontTitleBold",
        fontSize: 16,
        color: Colors.white_1,
    },
    contactSubtitle: {
        fontFamily: "FontText",
        fontSize: 14,
        color: Colors.white_1,
    },
});
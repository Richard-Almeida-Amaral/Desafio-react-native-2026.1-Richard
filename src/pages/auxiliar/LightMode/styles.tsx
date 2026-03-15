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
    backgroundColor: "rgba(242, 241, 246, 0.80)",
    },
    container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    },
    textPlaceholder: {
    fontFamily: "FontTitleBold",
    fontSize: 40,
    color: Colors.purple_3,
    },
});
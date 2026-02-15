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
    backgroundColor: "rgba(242, 241, 246, 0.8)",
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
  logoConteiner: {
    width: "100%",
    height: height * 0.65,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: width * 0.9,
    height: height * 0.5,
    resizeMode: "contain",
  },
  title: {
    fontFamily: "FontTitleBold",
    fontSize: 40,
  },
  formsContainer: {
    width: "100%",
    height: height * 0.25,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  buttonGuest: {
    backgroundColor: "rgba(75, 58, 106, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    width: width * 0.8,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(242, 241, 246, 0.2)',
  },
  buttonLogin: {
    backgroundColor: "rgba(123, 92, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    width: width * 0.8,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(46, 37, 66, 0.2)',
  },
  buttonText: {
    fontFamily: "FontTitleBold",
    fontSize: 15,
    color: Colors.white_1,
  }
});

import { Platform, StyleSheet } from "react-native";
import colors from "./colors";

export default {
  colors,
  headers: {
    fontSize: 15,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.medium,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
};

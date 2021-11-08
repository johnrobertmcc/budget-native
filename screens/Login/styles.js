import { colors } from "../../styles/globalStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: "900",
  },
  text: {
    fontSize: 10,
    color: colors.tertiary,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "5%",
    textAlign: "center",
  },
});

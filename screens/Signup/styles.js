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
  wrongPassword: {
    borderWidth: 2,
    borderColor: colors.warning,
  },
  disabled: {
    backgroundColor: colors.warning,
    width: "100%",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  disabledOutline: {
    marginTop: 5,
    backgroundColor: colors.white,
    borderColor: colors.text,
    borderWidth: 2,
  },

  warning: {
    fontSize: 10,
    color: colors.warning,
    paddingHorizontal: "5%",
  },
});

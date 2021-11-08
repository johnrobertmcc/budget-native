import { StyleSheet } from "react-native";
export const colors = {
  primary: "#167B94",
  secondary: "#98DBFF",
  tertiary: "#78B7F5",
  accent: "#A85508",
  warning: "#F5953D",
  text: "#8B9699",
  white: "#ffffff",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.primary,
    fontWeight: "700",
    fontSize: 16,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: "10%",
    paddingTop: "20%",
  },
  input: {
    borderColor: colors.secondary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 8,
  },
});

export const globalButtons = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    width: "100%",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonOutline: {
    marginTop: 5,
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 2,
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
});

export const globalText = StyleSheet.create({
  fixErrors: {
    color: colors.text,
    fontWeight: "700",
    fontSize: 16,
  },
  text: {
    color: colors.primary,
    fontWeight: "700",
    fontSize: 16,
  },
});

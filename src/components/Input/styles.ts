import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: theme.colors['gray-500'],
    borderWidth: 1,
    borderRadius: 6,
    borderColor: theme.colors['gray-700'],
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.colors['gray-100'],
  },
})

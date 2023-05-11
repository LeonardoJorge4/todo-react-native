import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingVertical: 48,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
    color: theme.colors['gray-300'],
  },
  subtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    textAlign: 'center',
    color: theme.colors['gray-300'],
  },
});
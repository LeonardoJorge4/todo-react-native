import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    padding: 12,
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors['gray-400'],
    backgroundColor: theme.colors['gray-500'],
    marginBottom: 8
  },
  checkButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  isChecked: {
    borderColor: theme.colors['purple-dark'],
    backgroundColor: theme.colors['purple-dark'],
  },
  notChecked: {
    borderColor: theme.colors.blue,
  },
  taskDescription: {
    flex: 1,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors['gray-100'],
  },
  trash: {
    width: 32,
    height: 32,
  },
  taskChecked: {
    textDecorationLine: 'line-through',
  },
});

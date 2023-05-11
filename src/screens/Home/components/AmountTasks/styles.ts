import { StyleSheet } from 'react-native';
import { theme } from '../../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  amountTasks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  amount: {
    fontSize: 12,
    fontFamily: theme.fonts.bold,
    color: theme.colors['gray-200'],
    backgroundColor: theme.colors['gray-400'],
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 16,
  },
  text: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
  },
  blueText: {
    color: theme.colors.blue,
  },
  purpleText: {
    color: theme.colors.purple,
  },
});

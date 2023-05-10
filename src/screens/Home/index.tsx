import React from 'react';

import { StyleSheet, View } from 'react-native';
import { theme } from '../../styles/theme';

export function Home() {
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors['gray-600'],
    alignItems: 'center',
    justifyContent: 'center',
  },
});

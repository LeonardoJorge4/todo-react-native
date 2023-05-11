import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface Props {
  amountTasks: number;
  amountConcludedTasks: number;
}

export function AmountTasks({ amountTasks, amountConcludedTasks }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.amountTasks}>
        <Text style={[styles.text, styles.blueText]}>Criadas</Text>
        <Text style={styles.amount}>{amountTasks}</Text>
      </View>

      <View style={styles.amountTasks}>
        <Text style={[styles.text, styles.purpleText]}>Concluídas</Text>
        <Text style={styles.amount}>{amountConcludedTasks}</Text>
      </View>
    </View>
  );
}

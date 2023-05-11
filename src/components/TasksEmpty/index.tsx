import React from 'react';

import ClipboardPng from '../../assets/images/clipboard.png';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

export function TasksEmpty() {
  return (
    <View style={styles.container}>
      <Image source={ClipboardPng} />

      <View>
        <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>

        <Text style={styles.subtitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}

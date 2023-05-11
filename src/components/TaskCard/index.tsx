import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import TrashPng from '../../assets/images/trash.png';
import { theme } from '../../styles/theme';
import { TaskProps } from '../../screens/Home';
import { styles } from './styles';

interface Props {
  task: TaskProps;
  onChangeStatus: (task: TaskProps) => void;
  onDelete: (id: number) => void;
}

export function TaskCard({ task, onChangeStatus, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onChangeStatus(task)}
        style={[
          styles.checkButton,
          task.isChecked ? styles.isChecked : styles.notChecked,
        ]}
      >
        {task.isChecked && (
          <Feather
            name="check"
            size={16}
            color={theme.colors['gray-100']}
          />
        )}
      </TouchableOpacity>

      <Text
        style={[styles.taskDescription, task.isChecked && styles.taskChecked]}
      >
        {task.description}
      </Text>

      <TouchableOpacity
        style={styles.trash}
        onPress={() => onDelete(task.id)}
      >
        <Image source={TrashPng} />
      </TouchableOpacity>
    </View>
  );
}

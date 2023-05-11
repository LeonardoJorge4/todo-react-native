import React, { useState } from 'react';

import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { theme } from '../../styles/theme';
import LogoPng from '../../assets/images/logo.png';
import PlusPng from '../../assets/images/plus.png';
import { TaskCard } from '../../components/TaskCard';
import { TasksEmpty } from '../../components/TasksEmpty';
import { Input } from '../../components/Input';
import { AmountTasks } from './components/AmountTasks';

export interface TaskProps {
  id: number;
  isChecked: boolean;
  description: string;
}

export function Home() {
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState<TaskProps[] | []>([]);
  const [countConcludedTasks, setCountConcludedTasks] = useState(0);

  function handleAddTask() {
    const task = {
      id: Number(new Date().getTime()),
      isChecked: false,
      description: inputTask,
    };

    setTasks((oldTasks) => [task, ...oldTasks]);
    setInputTask('');
  }

  function handleChangeStatusTask(taskItem: TaskProps) {
    tasks.filter((task) =>
      task.id === taskItem.id ? (task.isChecked = !task.isChecked) : task
    );

    if (taskItem.isChecked) {
      const tasksWithCompletedInLastPosition = [
        ...tasks.filter((task) => task !== taskItem),
        taskItem,
      ];

      setTasks(tasksWithCompletedInLastPosition);
      setCountConcludedTasks((oldCount) => oldCount + 1);
    } else {
      setTasks((oldTasks) => [...oldTasks]);
      setCountConcludedTasks((oldCount) => oldCount - 1);
    }
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setCountConcludedTasks((oldCount) => oldCount - 1);

    setTasks(filteredTasks);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
      />

      <View style={styles.header}>
        <Image source={LogoPng} />
      </View>

      <View style={styles.body}>
        <View style={styles.containerAddTask}>
          <Input
            value={inputTask}
            onChangeText={setInputTask}
            placeholder="Adicione uma nova tarefa"
          />

          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={handleAddTask}
          >
            <Image source={PlusPng} />
          </TouchableOpacity>
        </View>

        <AmountTasks
          amountTasks={tasks.length}
          amountConcludedTasks={countConcludedTasks}
        />

        {!tasks.length && <View style={styles.separator} />}

        <FlatList
          data={tasks}
          keyExtractor={(task) => String(task.id)}
          renderItem={({ item }) => (
            <TaskCard
              key={item.id}
              task={item}
              onDelete={handleRemoveTask}
              onChangeStatus={handleChangeStatusTask}
            />
          )}
          ListEmptyComponent={() => <TasksEmpty />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors['gray-600'],
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 173,
    backgroundColor: theme.colors['gray-700'],
  },
  body: {
    paddingHorizontal: 24,
  },
  containerAddTask: {
    flexDirection: 'row',
    gap: 4,
    marginTop: -26,
    marginBottom: 32,
  },
  buttonAdd: {
    width: 52,
    height: 52,
    backgroundColor: theme.colors['blue-dark'],
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors['gray-400'],
  },
});

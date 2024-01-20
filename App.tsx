import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import TaskItem from './src/components/TaskItem';
import AddTaskItem from './src/components/AddTaskItem';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (taskText: string) => {

    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleTaskComplete = (taskId: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleTaskRemove = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const renderTaskItem = ({ item }: { item: Task }) => (
    <TaskItem
      task={item}
      onTaskComplete={() => handleTaskComplete(item.id)}
      onTaskRemove={() => handleTaskRemove(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <AddTaskItem onAddTask={handleAddTask} />
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
});

export default App;

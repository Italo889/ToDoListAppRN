import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onTaskComplete: (taskId: number) => void;
  onTaskRemove: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onTaskComplete, onTaskRemove }) => {
  const checkboxStyle = task.completed ? styles.checkboxCompleted : styles.checkbox;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onTaskComplete(task.id)}>
        <View style={checkboxStyle}>
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </TouchableOpacity>
      <Text style={[styles.taskText, task.completed && styles.completedTaskText]}>
        {task.text}
      </Text>
      <TouchableOpacity style={styles.removeButton} onPress={() => onTaskRemove(task.id)}>
      <Text style={styles.removeButtonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FAFAFA'
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxCompleted: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkmark: {
    color: 'white',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: '#95a5a6',
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
  },
});

export default TaskItem;
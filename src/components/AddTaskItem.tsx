import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet, Keyboard, Text } from 'react-native';

interface AddTaskItemProps {
    onAddTask: (task: string) => void;
}

const AddTaskItem: React.FC<AddTaskItemProps> = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task.trim() !== '') {
            onAddTask(task);
            setTask('');
            Keyboard.dismiss();
        }
    };

    return (
        <View style={styles.addTaskContainer}>
            <TextInput
                style={styles.input}
                value={task}
                onChangeText={setTask}
                placeholder="Insira uma tarefa"
                returnKeyType="done"
                onSubmitEditing={handleAddTask}
            />
            <TouchableOpacity onPress={handleAddTask} style={styles.addTaskButton}>
                <Text style={styles.addTaskButton}>Adicionar</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    addTaskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        backgroundColor: '#FAFAFA'
    },
    input: {
        flex: 1,
        padding: 5,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#e2e2e2',
        borderRadius: 5,
        marginRight: 8,
    },
    addTaskButton: {
        padding: 5,
        color: '#fff',
        backgroundColor: '#22a7f0',
        borderRadius: 5,
    }
});

export default AddTaskItem;

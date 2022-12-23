import * as React from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { AppDataSource } from "../database/AppDataSource";
import Task from "../database/entities/Task";

export default function TodoList() {

  const [todoList, setTodoList] = useState<Array<Task>>([])
  const [newTask, setNewTask] = useState<Task>()
  const [inputValue, setInputValue] = useState<string>()

  useEffect(() => {
    findTask()
  }, [todoList])

  const findTask = async () => {
    const taskObject = await AppDataSource.manager.find(Task)
    setTodoList(taskObject)
  }

  const addTask = async () => {
    const taskRepository = AppDataSource.getRepository(Task)
    const newTask = new Task()
    newTask.task = inputValue
    await taskRepository.save(newTask)
    if (!inputValue) {
      alert("Invalid input!")
    }
    else {
      setTodoList([...todoList, newTask])
      setInputValue('')
    }
  }

  const deleteTask = async (taskId: number) => {
    const taskRepository = AppDataSource.getRepository(Task);
    await taskRepository.delete(taskId);
    const taskObject = await AppDataSource.manager.find(Task)
    setTodoList(taskObject)
  }

  return (
    <View style={styles.background}>
      <ScrollView>
        <LinearGradient
          colors={['#c89bff', '#d7cdf5']}>
          <View style={styles.inputFormContainer}>
            <View>
              <Text style={styles.title}>TaskList</Text>
              <TextInput
                style={styles.input}
                placeholder="Add task"
                placeholderTextColor={'gray'}
                testID='inputForm'
                onChangeText={setInputValue}
                value={inputValue}
              />
              <View style={styles.submitButton}>
                <Button title="Add task" color={'#9c00fe'} onPress={addTask} />
              </View>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={['#a38dfe', '#8ad9ff']}>
          <View style={styles.scrollViewContainer}>
            <View>
              <Text style={styles.tasks}>Tasks</Text>
            </View>
            <View>
              {todoList.map((task) => {
                return (
                  <View key={task.id} style={styles.list}>
                    <View style={styles.todoText}>
                      <Text style={styles.taskText}>{task.task}</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => deleteTask(task.id)}
                        style={styles.deleteButton}>
                        <Text style={{ color: 'white' }}>X</Text>
                      </TouchableOpacity>

                    </View>

                  </View>

                );
              })}
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  background: {
    backgroundColor: '#a38dfe'
  },
  taskText: {
    color: '#9133bb',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10
  },
  tasks: {
    color: 'white',
    fontSize: 20,
    textAlign: "left",
    marginBottom: 10,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  input: {
    padding: 5,
    margin: 10,
    marginLeft: 40,
    width: '80%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  submitButton: {
    width: '80%',
    marginLeft: 40,
    marginBottom: 30,
    marginTop: 10
  },
  title: {
    padding: 5,
    margin: 8,
    textAlign: 'left',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',

  },
  list: {
    textAlign: 'center',
    margin: 12,
    padding: 20,
    fontSize: 18,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    elevation: 3
  },
  inputFormContainer: {
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: 'black',

  },
  scrollViewContainer: {
    marginTop: 20,
    paddingTop: 10

  },
  todoText: {
    flexGrow: 12,
    margin: 2,
    width: '60%',
    fontSize: 20,

  },
  deleteButton: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'red',
    marginTop: 5,
    borderWidth: 0.5
  }
});

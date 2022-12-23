import React from "react";
import HomeScreen from "../HomeScreen/HomeScreen";
import DetailsScreen from "../DetailsScreen";
import ColorScreen from "../ColorScreen/ColorScreen";
import TodoList from "../TodoScreen/TodoList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewNotifications from "../components/NewNotifications";

type RootStackParamList = {
  Home: { image: string };
  Details: { image: string };
  Colors: undefined;
  TodoList: undefined;
  NewNotifications: undefined
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const ColorStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Colors" component={ColorScreen} />
    </Stack.Navigator>
  );
};

const TodoListNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TodoList" component={TodoList} />
    </Stack.Navigator>
  );
};

const NewNotificationsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewNotifications" component={NewNotifications} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ColorStackNavigator, TodoListNavigator, NewNotificationsNavigator };

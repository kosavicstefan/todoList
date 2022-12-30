import React from "react";
import HomeScreen from "../HomeScreen/HomeScreen";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";
import DetailsScreen from "../DetailsScreen";
import ColorScreen from "../ColorScreen/ColorScreen";
import TodoList from "../TodoScreen/TodoList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewNotifications from "../components/NewNotifications";
import ConfirmEmail from "../Authentication/ConfirmEmail";
import ForgotPassword from "../Authentication/ForgotPassword";
import NewPassword from "../Authentication/NewPassword";

type RootStackParamList = {
  Colors: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ConfirmEmail: undefined;
  ForgotPassword: undefined;
  NewPassword: undefined;
  Home: { image: string };
  Details: { image: string };
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
    <Stack.Navigator >
      <Stack.Screen name="Colors" component={ColorScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
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

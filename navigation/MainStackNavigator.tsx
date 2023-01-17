import React from "react";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SignIn from "../components/Authentication/SignIn";
import SignUp from "../components/Authentication/SignUp";
import DetailsScreen from "../screens/DetailsScreen/DetailsScreen";
import ColorScreen from "../screens/ColorScreen/ColorScreen";
import TodoList from "../screens/TodoScreen/TodoList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewNotifications from "../components/NewNotifications/NewNotifications";
import ConfirmEmail from "../components/Authentication/ConfirmEmail";
import ForgotPassword from "../components/Authentication/ForgotPassword";
import NewPassword from "../components/Authentication/NewPassword";
import FirebaseCRUD from "../components/Firebase/FirebaseCRUD"
import Restaurants from "../components/Restaurants/Restaurants";
import Card from "../components/Card/Card"
import RestaurantsDetails from '../components/RestaurantsDetails/RestaurantsDetails'



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
  NewNotifications: undefined;
  FirebaseCRUD: undefined;
  Restaurants: undefined;
  Card: { title: string, image: string }
  RestaurantsDetails: any;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
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
      <Stack.Screen name="Card" component={Card} />
      <Stack.Screen name="RestaurantsDetails" component={RestaurantsDetails} />
      <Stack.Screen name="Restaurants" component={Restaurants} />
    </Stack.Navigator>
  );
};

const FirebaseNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FirebaseCRUD" component={FirebaseCRUD} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ColorStackNavigator, TodoListNavigator, NewNotificationsNavigator, FirebaseNavigator };

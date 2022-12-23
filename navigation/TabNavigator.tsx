import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MainStackNavigator,
  ColorStackNavigator,
  TodoListNavigator,
  NewNotificationsNavigator,
} from "./MainStackNavigator";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Colors"
        component={ColorStackNavigator}
        options={{
          tabBarLabel: "Colors",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="aperture-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TodoList"
        component={TodoListNavigator}
        options={{
          tabBarLabel: "TodoList",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NewNotifications"
        component={NewNotificationsNavigator}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

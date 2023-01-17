import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MainStackNavigator,
  ColorStackNavigator,
  NewNotificationsNavigator,
  TodoListNavigator,
  FirebaseNavigator
} from "./MainStackNavigator";
import { Ionicons } from "@expo/vector-icons";

interface ITabs {
  name: string;
  component: typeof ColorStackNavigator
  icon: IconName
}

type IconName = keyof typeof Ionicons.glyphMap

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'Colors',
    component: ColorStackNavigator,
    icon: 'aperture-outline' as IconName
  },
  {
    name: 'Home',
    component: MainStackNavigator,
    icon: 'home' as IconName
  },
  {
    name: 'TodoList',
    component: TodoListNavigator,
    icon: 'list-outline' as IconName
  },
  {
    name: 'NewNotifications',
    component: NewNotificationsNavigator,
    icon: 'notifications-outline' as IconName
  },
  {
    name: 'Firebase',
    component: FirebaseNavigator,
    icon: 'logo-firebase' as IconName
  },
]

const BottomTabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    {tabs.map((tab: ITabs) => (
      <Tab.Screen
        key={tab.name}
        name={tab.name}
        component={tab.component}
        options={{
          tabBarLabel: tab.name,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={tab.icon} color={color} size={size} />
          ),
        }}
      />
    ))}

  </Tab.Navigator>
)

export default BottomTabNavigator;

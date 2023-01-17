import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ColorScreen from '../screens/ColorScreen/ColorScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Color">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Color" component={ColorScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
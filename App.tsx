// In App.js in a new project
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen/HomeScreen";
import DetailsScreen from "./DetailsScreen";
import { MainStackNavigator } from "./navigation/MainStackNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";
import 'reflect-metadata';
import { AppDataSource } from "./database/AppDataSource";

import { useEffect, useState } from "react";


function App() {

  useEffect(() => {
    const initDatabase = async () => {
      if (!AppDataSource.isInitialized) {
        try {
          try {
            await AppDataSource.initialize();
            return console.log("Database initialization SUCESS");
          } catch (err) {
            return console.log("Database initialization FAILED", err);
          }
        } finally { }
      } else {
        console.log("Database initialization ALREADY")
      }
    }
    initDatabase()
  }, [])

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;

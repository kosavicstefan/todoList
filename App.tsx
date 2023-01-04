import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";
import 'reflect-metadata';
import { AppDataSource } from "./database/configuration/AppDataSource";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const initDatabase = async () => {
      if (!AppDataSource.isInitialized) {
        try {
          try {
            await AppDataSource.initialize();
            return console.log("Database initialization SUCCESS");
          } catch (err) {
            return console.log("Database initialization FAILED", err);
          }
        } finally { /* empty */ }
      } else {
        console.log("Database initialization ALREADY")
      }
    }
    initDatabase()
  }, [])

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;

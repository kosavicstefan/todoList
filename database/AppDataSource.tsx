import "reflect-metadata"
import * as SQLite from 'expo-sqlite'
import { DataSource, DataSourceOptions } from "typeorm/browser"

//Entities
import Task from "./entities/Task"
import User from "./entities/User"


export const AppDataSourceOptions: DataSourceOptions = {
    type: 'expo',
    database: 'todo.db',
    driver: SQLite,
    synchronize: true,
    entities: [User, Task]
}


export const AppDataSource = new DataSource(AppDataSourceOptions)

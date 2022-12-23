import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
class Task {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'text' })
    task: string
}

export default Task

























/* import { EntitySchema } from "typeorm";   STARI NACIN KREIRANJA TABELE

export interface ITask {
    id: number
    text: string
}

const Task = new EntitySchema<ITask>({
    name: "Task", // Entity name (your "Model")
    tableName: "tasks", // database table
    columns: {
        id: {
            primary: true, // primary key
            type: "int",
            generated: true, // auto-generated
        },
        text: {
            type: "varchar",
        }
    },
});

export default Task; */
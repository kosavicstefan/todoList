import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    name: string;
}

export default User
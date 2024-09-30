import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Animal } from './Animal';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  // @ManyToOne(type => Animal, animal => animal.id)
  // animal : Animal
}
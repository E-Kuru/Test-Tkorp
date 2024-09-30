import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Person } from './Person';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  species: string;

  @Column()
  breed: string;

  @Column()
  color: string;

  @Column()
  weight: number;

  @Column()
  ownerId : string;

  // @ManyToOne(type => Person,  (person) => person.id)
  // owner?: string
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cadete {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  /*
  @Column({ length: 20, unique: true }) // Teléfono del repartidor
  telefono: string;*/
}
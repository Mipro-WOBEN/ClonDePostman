import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Colecciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nombre_coleccion: string;

  @Column({ nullable: false })
  id_proyecto: number;
}

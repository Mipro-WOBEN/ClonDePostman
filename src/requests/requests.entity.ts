// src/requests/requests.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('solicitudes')
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  url: string;

  @Column()
  method: string;

  @Column({ type: 'text', nullable: true })
  body: string;

  @Column({ type: 'text', nullable: true })
  header: string;

  @Column()
  creado_en: Date;

  @Column()
  id_coleccion: number;

  @Column()
  id_method: number;
}

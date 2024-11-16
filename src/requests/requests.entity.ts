// src/requests/requests.entity.ts
import { Colecciones } from 'src/colecciones/colecciones.entity';
import { Methods } from 'src/methods/methods.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('solicitudes')
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  url: string;

  @Column({ type: 'text', nullable: true })
  header: string;

  @Column({ type: 'text', nullable: true })
  body: string;

  @Column({ type: 'date', nullable: true })
  creado_en: Date;

  @Column()
  id_coleccion: number;

  @Column()
  id_method: number;

  @ManyToOne(() => Colecciones, (coleccion) => coleccion.requests)
  @JoinColumn({ name: 'id_coleccion' })
  coleccion: Colecciones;

  @ManyToOne(() => Methods, (method) => method.requests)
  @JoinColumn({ name: 'id_method' })
  method: Methods;
}

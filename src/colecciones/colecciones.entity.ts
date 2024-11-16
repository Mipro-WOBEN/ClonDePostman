import { Proyectos } from 'src/proyectos/Proyectos.entity';
import { Request } from 'src/requests/requests.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('colecciones')
export class Colecciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nombre_coleccion: string;

  @Column()
  id_proyecto: number;

  @ManyToOne(() => Proyectos)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyectos;

  @OneToMany(() => Request, (request) => request.coleccion)
  requests: Request[];
}

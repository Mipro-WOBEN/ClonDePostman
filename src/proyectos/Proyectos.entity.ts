import { Colecciones } from 'src/colecciones/colecciones.entity';
import { User } from 'src/users/users.entity';
import { UsuarioRolProyecto } from 'src/usuario_rol_proyecto/usuarioRolProyecto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('proyectos')
export class Proyectos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nombre_proyecto: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'date', nullable: true, default: () => 'GETDATE()' })
  creado_en: Date;

  @Column({ type: 'int', nullable: false })
  id_usuario: number;
  @ManyToOne(() => User, (user) => user.proyectos)
  @JoinColumn({ name: 'id_usuario' })
  user: User;

  @OneToMany(() => Colecciones, (coleccion) => coleccion.proyecto)
  colecciones: Colecciones[];

  @OneToMany(
    () => UsuarioRolProyecto,
    (usuarioRolProyecto) => usuarioRolProyecto.user,
  )
  usuarioRolProyectos: UsuarioRolProyecto[];

  // @Column({ default: true, nullable: true })
  // isActive: boolean;
}

import { Proyectos } from 'src/proyectos/Proyectos.entity';
import { Roles } from 'src/roles/roles.entity';
import { User } from 'src/users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('usuario_rol_proyecto')
export class UsuarioRolProyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  id_usuario: number;

  @Column({ type: 'int', nullable: false })
  id_rol: number;

  @Column({ type: 'int', nullable: false })
  id_proyecto: number;

  @ManyToOne(() => User, (user) => user.usuarioRolProyectos)
  @JoinColumn({ name: 'id_usuario' })
  user: User;

  @ManyToOne(() => Roles)
  @JoinColumn({ name: 'id_rol' })
  rol: Roles;

  @ManyToOne(() => Proyectos, (proyecto) => proyecto.usuarioRolProyectos)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyectos;
}

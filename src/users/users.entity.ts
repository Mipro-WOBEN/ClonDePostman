// src/users/users.entity.ts
import { Proyectos } from 'src/proyectos/Proyectos.entity';
import { UsuarioRolProyecto } from 'src/usuario_rol_proyecto/usuarioRolProyecto.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('usuarios')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  apellido: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  correo: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  contraseña: string;

  @OneToMany(
    () => UsuarioRolProyecto,
    (usuarioRolProyecto) => usuarioRolProyecto.user,
  )
  usuarioRolProyectos: UsuarioRolProyecto[];

  @OneToMany(() => Proyectos, (proyecto) => proyecto.user)
  proyectos: Proyectos[];

  @Column({ default: true, nullable: true })
  isActive: boolean;
}

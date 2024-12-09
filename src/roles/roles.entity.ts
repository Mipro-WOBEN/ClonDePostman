import { UsuarioRolProyecto } from 'src/usuario_rol_proyecto/usuarioRolProyecto.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nombre_rol: string;

  @OneToMany(
    () => UsuarioRolProyecto,
    (usuarioRolProyecto) => usuarioRolProyecto.user,
  )
  usuarioRolProyectos: UsuarioRolProyecto[];
}

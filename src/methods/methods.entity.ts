import { Request } from 'src/requests/requests.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('method')
export class Methods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  name_method: string;

  @OneToMany(() => Request, (request) => request.method)
  requests: Request[];
}

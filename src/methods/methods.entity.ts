import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('method')
export class Methods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  name_method: string;
}

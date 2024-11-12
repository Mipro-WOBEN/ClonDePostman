// src/requests/requests.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  method: string;

  @Column({ type: 'text', nullable: true })
  body: string;

  @Column()
  userId: number;
}

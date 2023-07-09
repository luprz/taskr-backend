import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid' )
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  created: Date;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updated: Date;
}
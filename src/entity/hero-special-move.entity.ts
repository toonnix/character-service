import { Entity, Column, PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'heroSpecialMove' })
export class HeroSpecialMoveEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 50, unique: true })
  specialMoveId: string;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'varchar' })
  description: string;
}
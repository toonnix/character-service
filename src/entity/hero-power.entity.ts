import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum PowerTypeEnum {
  "ATTACK" = "ATTACK",
  "MOVE" = "MOVE",
  "HEROIC_ACTIOM" = "HEROIC_ACTIOM",
  "WILD_CARD" = "WILD_CARD"
}

@Entity({ name: 'heroPower' })
export class HeroPowerEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  heroPowerId: number;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'enum', enum: PowerTypeEnum })
  powerType: PowerTypeEnum;
}

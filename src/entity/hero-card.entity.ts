import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PowerTypeEnum } from './hero-power.entity';

export enum HeroCardLevel {
  "COMMON" = "COMMON",
  "UN_COMMON" = "UN_COMMON",
  "RARE" = "RARE",
}

@Entity({ name: 'heroCard' })
export class HeroCardEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  heroCardId: number;

  @Column({ type: 'simple-enum', enum: HeroCardLevel })
  cardLevel: string;

  @Column({ type: 'enum', enum: PowerTypeEnum, array: true, nullable: true })
  heroPowers: PowerTypeEnum[];

  @Column({ nullable: true })
  specialMoveId: string;

  @Column("varchar")
  heroCode: string;
}

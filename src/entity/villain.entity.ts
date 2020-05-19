import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { MaxLength } from 'class-validator';

@Entity({ name: 'villain' })
export class VillainEntity extends BaseEntity {
  @Column("varchar", { unique: true })
  @MaxLength(50)
  villainCode: string;

  @Column("varchar")
  @MaxLength(50)
  title: string;

  @Column("varchar")
  description: string;

  @Column('integer', { array: true })
  health: number[];

  @Column("varchar")
  plotDescription: string;

  @Column("varchar")
  overFlowDescription: string;

  @Column("varchar")
  bamDescription: string;
}

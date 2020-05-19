import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { MaxLength } from 'class-validator';

@Entity({ name: 'henchman' })
export class HenchmanEntity extends BaseEntity {
  @Column("varchar", { unique: true })
  @MaxLength(50)
  henchmanCode: string;

  @Column("varchar")
  @MaxLength(50)
  villainCode: string;

  @Column("varchar")
  @MaxLength(50)
  title: string;

  @Column('integer')
  health: number;

  @Column("varchar")
  description: string;
}

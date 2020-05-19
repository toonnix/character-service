import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { MaxLength } from 'class-validator';
import { PowerTypeEnum } from './hero-power.entity';

@Entity({ name: 'threat' })
export class ThreatEntity extends BaseEntity {
  @Column("varchar", { unique: true })
  @MaxLength(50)
  threatCode: string;

  @Column("varchar")
  @MaxLength(50)
  villainCode: string;

  @Column('enum', { enum: PowerTypeEnum })
  tokenTypeRequired: PowerTypeEnum;

  @Column('integer')
  tokenNumberRequired: number;

  @Column("varchar")
  description: string;
}

import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'hero' })
export class HeroEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  heroCode: string;

  @Column({ type: 'varchar', length: 50 })
  firstName: string;

  @Column({ type: 'varchar', length: 50 })
  lastName: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar', length: 50, array: true, nullable: true })
  alias: string[];
}
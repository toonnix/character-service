import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { MaxLength } from 'class-validator';

export class VillianLocationAction {
  @Column('integer')
  addThug: number;

  @Column('integer')
  addCivillian: number;
}

export class VillianMoveAction {
  @Column('integer')
  moveAmount: number;

  @Column('boolean')
  isClockwise: boolean;
}

@Entity({ name: 'villainCard' })
export class VillainCardEntity extends BaseEntity {
  @Column("varchar")
  @MaxLength(50)
  villainCode: string;

  @Column("varchar", { unique: true })
  @MaxLength(50)
  villainCardCode: string;

  @Column('boolean')
  isActivateBam: boolean;

  @Column(type => VillianLocationAction)
  leftLocation: VillianLocationAction;

  @Column(type => VillianLocationAction)
  middleLocation: VillianLocationAction;

  @Column(type => VillianLocationAction)
  rightLocation: VillianLocationAction;

  @Column('varchar')
  cardEffect: string;

  @Column(type => VillianMoveAction)
  moveAction: VillianMoveAction;
}

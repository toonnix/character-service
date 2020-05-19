import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';
import { VillianLocationAction, VillainCardEntity, VillianMoveAction } from 'src/entity/villain-card.entity';

export class VillainCardDTO implements Readonly<VillainCardDTO> {
  @ApiProperty({ type: 'string' })
  @MaxLength(50)
  villainCode: string;

  @ApiProperty({ type: 'string', uniqueItems: true })
  @MaxLength(50)
  villainCardCode: string;

  @ApiProperty()
  @IsString()
  isActivateBam: boolean;

  @ApiProperty({ type: () => VillianLocationAction })
  leftLocation: VillianLocationAction;

  @ApiProperty({ type: () => VillianLocationAction })
  middleLocation: VillianLocationAction;

  @ApiProperty({ type: () => VillianLocationAction })
  rightLocation: VillianLocationAction;

  @ApiProperty()
  @IsString()
  cardEffect: string;

  @ApiProperty({ type: () => VillianMoveAction, description: "{ moveAmount: integer, isClockwise: boolean }" })
  moveAction: VillianMoveAction;

  public static from(dto: Partial<VillainCardDTO>) {
    const villainCard = new VillainCardDTO();
    villainCard.villainCode = dto.villainCode;
    villainCard.villainCardCode = dto.villainCardCode;
    villainCard.isActivateBam = dto.isActivateBam;
    villainCard.leftLocation = dto.leftLocation;
    villainCard.middleLocation = dto.middleLocation;
    villainCard.rightLocation = dto.rightLocation;
    villainCard.cardEffect = dto.cardEffect;
    villainCard.moveAction = dto.moveAction;
    return villainCard;
  }

  public static fromEntity(entity: VillainCardEntity) {
    return this.from({
      villainCode: entity.villainCode,
      villainCardCode: entity.villainCardCode,
      isActivateBam: entity.isActivateBam,
      leftLocation: entity.leftLocation,
      middleLocation: entity.middleLocation,
      rightLocation: entity.rightLocation,
      cardEffect: entity.cardEffect,
      moveAction: entity.moveAction,
    });
  }

  public toEntity(this: VillainCardDTO) {
    const villainCard = new VillainCardEntity();
    villainCard.villainCode = this.villainCode;
    villainCard.villainCardCode = this.villainCardCode;
    villainCard.isActivateBam = this.isActivateBam;
    villainCard.leftLocation = this.leftLocation;
    villainCard.middleLocation = this.middleLocation;
    villainCard.rightLocation = this.rightLocation;
    villainCard.cardEffect = this.cardEffect;
    villainCard.moveAction = this.moveAction;
    villainCard.createDateTime = new Date();
    return villainCard;
  }
}

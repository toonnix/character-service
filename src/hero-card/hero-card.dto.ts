import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, MaxLength, IsArray, } from 'class-validator';
import { HeroCardLevel, HeroCardEntity } from 'src/entity/hero-card.entity';
import { PowerTypeEnum } from 'src/entity/hero-power.entity';

export class HeroCardDTO implements Readonly<HeroCardDTO> {
  @ApiProperty({ required: true })
  @IsInt()
  heroCardId: number;

  @ApiProperty({ enum: HeroCardLevel })
  cardLevel: string;

  @ApiProperty({ enum: PowerTypeEnum, nullable: true, isArray: true, default: PowerTypeEnum.ATTACK })
  @IsArray()
  heroPowers: PowerTypeEnum[];

  @ApiProperty({ nullable: true })
  @IsString()
  specialMoveId: string;

  @ApiProperty({ required: true })
  @IsString()
  heroCode: string;

  public static from(dto: Partial<HeroCardDTO>) {
    const heroCard = new HeroCardDTO();
    heroCard.heroCardId = dto.heroCardId;
    heroCard.cardLevel = dto.cardLevel;
    heroCard.heroPowers = dto.heroPowers;
    heroCard.heroCode = dto.heroCode;
    heroCard.specialMoveId = dto.specialMoveId;
    return heroCard;
  }

  public static fromEntity(entity: HeroCardEntity) {
    return this.from({
      heroCardId: entity.heroCardId,
      cardLevel: entity.cardLevel,
      heroPowers: entity.heroPowers,
      heroCode: entity.heroCode,
      specialMoveId: entity.specialMoveId
    });
  }

  public toEntity(this: HeroCardDTO) {
    const heroCard = new HeroCardEntity();
    heroCard.heroCardId = this.heroCardId;
    heroCard.cardLevel = this.cardLevel;
    heroCard.heroPowers = this.heroPowers;
    heroCard.heroCode = this.heroCode;
    heroCard.specialMoveId = this.specialMoveId;
    heroCard.createDateTime = new Date();
    return heroCard;
  }
}
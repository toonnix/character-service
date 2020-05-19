
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';
import { HeroSpecialMoveEntity } from 'src/entity/hero-special-move.entity';

export class HeroSpecialMoveDTO implements Readonly<HeroSpecialMoveDTO> {
  @ApiProperty({ required: true, uniqueItems: true })
  @IsString()
  @MaxLength(50)
  specialMoveId: string;

  @ApiProperty({ required: true })
  @IsString()
  @MaxLength(50)
  title: string;

  @ApiProperty({ required: true })
  @IsString()
  description: string;

  public static from(dto: Partial<HeroSpecialMoveDTO>) {
    const heroPower = new HeroSpecialMoveDTO();
    heroPower.specialMoveId = dto.specialMoveId;
    heroPower.title = dto.title;
    heroPower.description = dto.description;
    return heroPower;
  }

  public static fromEntity(entity: HeroSpecialMoveEntity) {
    return this.from({
      specialMoveId: entity.specialMoveId,
      title: entity.title,
      description: entity.description,
    });
  }

  public toEntity(this: HeroSpecialMoveDTO) {
    const heroPower = new HeroSpecialMoveEntity();
    heroPower.title = this.title;
    heroPower.specialMoveId = this.specialMoveId;
    heroPower.description = this.description;
    heroPower.createDateTime = new Date();
    return heroPower;
  }
}

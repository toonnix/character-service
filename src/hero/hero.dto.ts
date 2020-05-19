import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, MaxLength, IsArray, } from 'class-validator';
import { HeroEntity } from 'src/entity/hero.entity';

export class HeroDTO implements Readonly<HeroDTO> {
  @ApiProperty({ required: true })
  @IsString()
  heroCode: string;

  @ApiProperty({ required: true, uniqueItems: true })
  @IsString()
  @MaxLength(50)
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @MaxLength(50)
  firstName: string;

  @ApiProperty({ required: true })
  @IsString()
  @MaxLength(50)
  lastName: string;

  @ApiProperty({ required: true })
  @IsString()
  description: string;

  @ApiProperty({ nullable: true })
  @IsArray()
  alias: string[];

  public static from(dto: Partial<HeroDTO>) {
    const hero = new HeroDTO();
    hero.name = dto.name;
    hero.firstName = dto.firstName;
    hero.lastName = dto.lastName;
    hero.description = dto.description;
    hero.alias = dto.alias;
    return hero;
  }

  public static fromEntity(entity: HeroEntity) {
    return this.from({
      heroCode: entity.heroCode,
      firstName: entity.firstName,
      lastName: entity.lastName,
      name: entity.name,
      description: entity.description,
      alias: entity.alias
    });
  }

  public toEntity(this: HeroDTO) {
    const newHero = new HeroEntity();
    newHero.heroCode = this.heroCode;
    newHero.name = this.name;
    newHero.alias = this.alias;
    newHero.description = this.description;
    newHero.createDateTime = new Date();
    return newHero;
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, MaxLength } from 'class-validator';
import { HeroPowerEntity, PowerTypeEnum } from 'src/entity/hero-power.entity';

export class HeroPowerDTO implements Readonly<HeroPowerDTO> {
  @ApiProperty({ required: true, uniqueItems: true })
  @IsInt()
  heroPowerId: number;

  @ApiProperty({ required: true })
  @IsString()
  @MaxLength(50)
  title: string;

  @ApiProperty({ enum: PowerTypeEnum })
  powerType: PowerTypeEnum;

  @ApiProperty({ nullable: true })
  @IsString()
  @MaxLength(255)
  description: string;

  public static from(dto: Partial<HeroPowerDTO>) {
    const heroPower = new HeroPowerDTO();
    heroPower.title = dto.title;
    heroPower.powerType = dto.powerType;
    heroPower.description = dto.description;
    return heroPower;
  }

  public static fromEntity(entity: HeroPowerEntity) {
    return this.from({
      title: entity.title,
      heroPowerId: entity.heroPowerId,
      powerType: entity.powerType,
      description: entity.description,
    });
  }

  public toEntity(this: HeroPowerDTO) {
    const heroPower = new HeroPowerEntity();
    heroPower.title = this.title;
    heroPower.heroPowerId = this.heroPowerId;
    heroPower.powerType = this.powerType;
    heroPower.description = this.description;
    heroPower.createDateTime = new Date();
    return heroPower;
  }
}

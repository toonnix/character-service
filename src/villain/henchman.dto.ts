import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsInt, } from 'class-validator';
import { HenchmanEntity } from 'src/entity/henchman.entity';

export class HenchmanDTO implements Readonly<HenchmanDTO> {
  @ApiProperty()
  @IsString()
  @MaxLength(50)
  villainCode: string;

  @ApiProperty({ uniqueItems: true })
  @IsString()
  @MaxLength(50)
  henchmanCode: string;

  @ApiProperty()
  @MaxLength(50)
  title: string;

  @ApiProperty()
  @IsInt()
  health: number;

  @ApiProperty()
  @IsString()
  description: string;

  public static from(dto: Partial<HenchmanDTO>) {
    const henchman = new HenchmanDTO();
    henchman.villainCode = dto.villainCode;
    henchman.henchmanCode = dto.henchmanCode;
    henchman.title = dto.title;
    henchman.health = dto.health;
    henchman.description = dto.description;
    return henchman;
  }

  public static fromEntity(entity: HenchmanEntity) {
    return this.from({
      villainCode: entity.villainCode,
      henchmanCode: entity.henchmanCode,
      title: entity.title,
      health: entity.health,
      description: entity.description,
    });
  }

  public toEntity(this: HenchmanDTO) {
    const henchman = new HenchmanEntity();
    henchman.villainCode = this.villainCode;
    henchman.henchmanCode = this.henchmanCode;
    henchman.title = this.title;
    henchman.health = this.health;
    henchman.description = this.description;
    henchman.createDateTime = new Date();
    return henchman;
  }
}

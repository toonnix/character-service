import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsArray, } from 'class-validator';
import { VillainEntity } from 'src/entity/villain.entity';

export class VillainDTO implements Readonly<VillainDTO> {
  @ApiProperty({ uniqueItems: true })
  @IsString()
  @MaxLength(50)
  villainCode: string;

  @ApiProperty()
  @IsString()
  @MaxLength(50)
  title: string;

  @ApiProperty()
  @IsArray()
  health: number[];

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  plotDescription: string;

  @ApiProperty()
  @IsString()
  overFlowDescription: string;

  @ApiProperty()
  @IsString()
  bamDescription: string;

  public static from(dto: Partial<VillainDTO>) {
    const villain = new VillainDTO();
    villain.villainCode = dto.villainCode;
    villain.title = dto.title;
    villain.health = dto.health;
    villain.description = dto.description;
    villain.plotDescription = dto.plotDescription;
    villain.overFlowDescription = dto.overFlowDescription;
    villain.bamDescription = dto.bamDescription;
    return villain;
  }

  public static fromEntity(entity: VillainEntity) {
    return this.from({
      villainCode: entity.villainCode,
      title: entity.title,
      health: entity.health,
      description: entity.description,
      plotDescription: entity.plotDescription,
      overFlowDescription: entity.overFlowDescription,
      bamDescription: entity.bamDescription
    });
  }

  public toEntity(this: VillainDTO) {
    const villain = new VillainEntity();
    villain.villainCode = this.villainCode;
    villain.title = this.title;
    villain.health = this.health;
    villain.description = this.description;
    villain.plotDescription = this.plotDescription;
    villain.overFlowDescription = this.overFlowDescription;
    villain.bamDescription = this.bamDescription;
    villain.createDateTime = new Date();
    return villain;
  }
}

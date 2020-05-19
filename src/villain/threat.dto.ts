import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsInt, } from 'class-validator';
import { ThreatEntity } from 'src/entity/threat.entity';
import { PowerTypeEnum } from 'src/entity/hero-power.entity';

export class ThreatDTO implements Readonly<ThreatDTO> {
  @ApiProperty()
  @IsString()
  @MaxLength(50)
  villainCode: string;

  @ApiProperty({ uniqueItems: true })
  @IsString()
  @MaxLength(50)
  threatCode: string;

  @ApiProperty({ type: 'enum', enum: PowerTypeEnum })
  tokenTypeRequired: PowerTypeEnum;

  @ApiProperty()
  @IsInt()
  tokenNumberRequired: number;

  @ApiProperty()
  @IsString()
  description: string;

  public static from(dto: Partial<ThreatDTO>) {
    const threat = new ThreatDTO();
    threat.villainCode = dto.villainCode;
    threat.threatCode = dto.threatCode;
    threat.tokenTypeRequired = dto.tokenTypeRequired;
    threat.description = dto.description;
    threat.tokenNumberRequired = dto.tokenNumberRequired;
    return threat;
  }

  public static fromEntity(entity: ThreatEntity) {
    return this.from({
      villainCode: entity.villainCode,
      threatCode: entity.threatCode,
      tokenTypeRequired: entity.tokenTypeRequired,
      description: entity.description,
      tokenNumberRequired: entity.tokenNumberRequired,
    });
  }

  public toEntity(this: ThreatDTO) {
    const threat = new ThreatEntity();
    threat.villainCode = this.villainCode;
    threat.threatCode = this.threatCode;
    threat.tokenTypeRequired = this.tokenTypeRequired;
    threat.description = this.description;
    threat.tokenNumberRequired = this.tokenNumberRequired;
    threat.createDateTime = new Date();
    return threat;
  }
}

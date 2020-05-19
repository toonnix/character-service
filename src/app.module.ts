import { HenchmanController } from './villain/henchman.controller';
import { HenchmanService } from './villain/henchman.service';
import { ThreatController } from './villain/threat.controller';
import { ThreatService } from './villain/threat.service';
import { VillainController } from './villain/villain.controller';
import { VillainService } from './villain/villain.service';
import { HeroSpecialMoveController } from './hero-power/hero-special-move.controller';
import { HeroCardController } from './hero-card/hero-card.controller';
import { HeroCardService } from './hero-card/hero-card.service';
import { HeroPowerController } from './hero-power/hero-power.controller';
import { HeroPowerService } from './hero-power/hero-power.service';
import { HeroController } from './hero/hero.controller';
import { HeroService } from './hero/hero.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';

import { HeroEntity } from './entity/hero.entity';
import { HeroPowerEntity } from './entity/hero-power.entity';
import { HeroCardEntity } from './entity/hero-card.entity';
import { HeroSpecialMoveService } from './hero-power/hero-special-move.service';
import { HeroSpecialMoveEntity } from './entity/hero-special-move.entity';
import { VillainEntity } from './entity/villain.entity';
import { HenchmanEntity } from './entity/henchman.entity';
import { ThreatEntity } from './entity/threat.entity';
import { VillainCardEntity } from './entity/villain-card.entity';
import { VillainCardService } from './villain/villain-card.service';
import { VillainCardController } from './villain/villain-card.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([
      HeroEntity,
      HeroPowerEntity,
      HeroCardEntity,
      HeroSpecialMoveEntity,
      VillainEntity,
      HenchmanEntity,
      ThreatEntity,
      VillainCardEntity
    ])
  ],
  controllers: [
    HenchmanController,
    ThreatController,
    VillainController,
    VillainCardController,
    HeroSpecialMoveController,
    HeroCardController,
    HeroPowerController,
    HeroController,
  ],
  providers: [
    HenchmanService,
    ThreatService,
    VillainService,
    VillainCardService,
    HeroSpecialMoveService,
    HeroCardService,
    HeroPowerService,
    HeroService,
  ],
})

export class AppModule { }
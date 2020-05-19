import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HeroCardService } from './hero-card.service';
import { HeroCardDTO } from './hero-card.dto';

@Controller('hero-card')
export class HeroCardController {
  constructor(private serv: HeroCardService) { }

  @Get()
  public async getAll(): Promise<HeroCardDTO[]> {
    return await this.serv.getAll()
  }

  @Get(':heroCode')
  public async findByHeroCode(@Param('heroCode') heroCode: string) {
    return await this.serv.get(heroCode)
  }

  @Post()
  public async post(@Body() dto: HeroCardDTO): Promise<HeroCardDTO> {
    return this.serv.create(dto);
  }
}

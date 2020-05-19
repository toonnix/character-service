import { Controller, Get, Post, Body } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroDTO } from './hero.dto';

@Controller('hero')
export class HeroController {
  constructor(private serv: HeroService) { }

  @Get()
  public async getAll(): Promise<HeroDTO[]> {
    return await this.serv.getAll()
  }

  @Post()
  public async post(@Body() dto: HeroDTO): Promise<HeroDTO> {
    return this.serv.create(dto);
  }
}

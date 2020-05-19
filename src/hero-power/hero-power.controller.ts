import { Controller, Body, Get, Post } from '@nestjs/common';
import { HeroPowerService } from './hero-power.service';
import { HeroPowerDTO } from './hero-power.dto';

@Controller('hero-power')
export class HeroPowerController {
  constructor(private serv: HeroPowerService) { }

  @Get()
  public async getAll(): Promise<HeroPowerDTO[]> {
    return await this.serv.getAll()
  }

  @Post()
  public async post(@Body() dto: HeroPowerDTO): Promise<HeroPowerDTO> {
    return this.serv.create(dto);
  }
}

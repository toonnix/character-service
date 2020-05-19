import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { HeroSpecialMoveService } from './hero-special-move.service';
import { HeroSpecialMoveDTO } from './hero-special-move.dto';

@Controller('hero-special-move')
export class HeroSpecialMoveController {
  constructor(private serv: HeroSpecialMoveService) { }

  @Get()
  public async getAll(): Promise<HeroSpecialMoveDTO[]> {
    return await this.serv.getAll()
  }

  @Get(':specialMoveId')
  public async findByHeroCode(@Param('specialMoveId') specialMoveId: string) {
    return await this.serv.get(specialMoveId)
  }

  @Post()
  public async post(@Body() dto: HeroSpecialMoveDTO): Promise<HeroSpecialMoveDTO> {
    return this.serv.create(dto);
  }

  @Delete(':specialMoveId')
  public async delete(@Param('specialMoveId') specialMoveId: string) {
    return await this.serv.delete(specialMoveId);
  }
}

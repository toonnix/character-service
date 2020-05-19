import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { VillainService } from './villain.service';
import { VillainDTO } from './villain.dto';

@Controller('villain')
export class VillainController {
  constructor(private serv: VillainService) { }

  @Get()
  public async getAll(): Promise<VillainDTO[]> {
    return await this.serv.getAll()
  }

  @Get(':villainCode')
  public async findByHeroCode(@Param('villainCode') villainCode: string) {
    return await this.serv.get(villainCode)
  }

  @Post()
  public async post(@Body() dto: VillainDTO): Promise<VillainDTO> {
    return this.serv.create(dto);
  }

  @Delete(':villainCode')
  public async delete(@Param('villainCode') villainCode: string) {
    return await this.serv.delete(villainCode);
  }
}

import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { VillainCardService } from './villain-card.service';
import { VillainCardDTO } from './villain-card.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('villain-card')
export class VillainCardController {
  constructor(private serv: VillainCardService) { }

  @Get()
  public async getAll(): Promise<VillainCardDTO[]> {
    return await this.serv.getAll()
  }

  @Get(':villainCardCode')
  public async findByCardCode(@Param('villainCardCode') villainCardCode: string) {
    return await this.serv.findByCardCode(villainCardCode)
  }

  @Get(':villainCode')
  public async findByVillainCode(@Param('villainCode') villainCode: string) {
    return await this.serv.findByVillainCode(villainCode)
  }

  @Post()
  @ApiBody({ type: VillainCardDTO })
  public async post(@Body() dto: VillainCardDTO): Promise<VillainCardDTO> {
    return this.serv.create(dto);
  }

  @Delete(':villainCardCode')
  public async delete(@Param('villainCardCode') villainCardCode: string) {
    return await this.serv.delete(villainCardCode);
  }
}

import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { HenchmanService } from './henchman.service';
import { HenchmanDTO } from './henchman.dto';

@Controller('henchman')
export class HenchmanController {
  constructor(private serv: HenchmanService) { }

  @Get()
  public async getAll(): Promise<HenchmanDTO[]> {
    return await this.serv.getAll()
  }

  @Get(':henchmanCode')
  public async findByHeroCode(@Param('henchmanCode') henchmanCode: string) {
    return await this.serv.get(henchmanCode)
  }

  @Post()
  public async post(@Body() dto: HenchmanDTO): Promise<HenchmanDTO> {
    return this.serv.create(dto);
  }

  @Delete(':henchmanCode')
  public async delete(@Param('henchmanCode') henchmanCode: string) {
    return await this.serv.delete(henchmanCode);
  }
}

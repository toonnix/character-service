import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ThreatService } from './threat.service';
import { ThreatDTO } from './threat.dto';

@Controller('threat')
export class ThreatController {
  constructor(private serv: ThreatService) { }

  @Get()
  public async getAll(): Promise<ThreatDTO[]> {
    return await this.serv.getAll()
  }

  @Get(':threatCode')
  public async findByHeroCode(@Param('threatCode') threatCode: string) {
    return await this.serv.get(threatCode)
  }

  @Post()
  public async post(@Body() dto: ThreatDTO): Promise<ThreatDTO> {
    return this.serv.create(dto);
  }

  @Delete(':threatCode')
  public async delete(@Param('threatCode') threatCode: string) {
    return await this.serv.delete(threatCode);
  }
}

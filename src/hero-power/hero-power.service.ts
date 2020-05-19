import { Injectable } from '@nestjs/common';
import { HeroPowerEntity } from 'src/entity/hero-power.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HeroPowerDTO } from './hero-power.dto';

@Injectable()
export class HeroPowerService {
  constructor(@InjectRepository(HeroPowerEntity) private readonly repo: Repository<HeroPowerEntity>) { }

  public async getAll(): Promise<HeroPowerDTO[]> {
    return await this.repo.find()
      .then(items => items.map(e => HeroPowerDTO.fromEntity(e)));
  }

  public async create(dto: HeroPowerDTO): Promise<HeroPowerDTO> {
    return this.repo.save(dto)
      .then(e => HeroPowerDTO.fromEntity(e));
  }
}

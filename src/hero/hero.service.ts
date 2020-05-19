import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HeroEntity } from '../entity/hero.entity';
import { Repository } from 'typeorm';
import { HeroDTO } from './hero.dto';

@Injectable()
export class HeroService {
  constructor(@InjectRepository(HeroEntity) private readonly repo: Repository<HeroEntity>) { }

  public async getAll(): Promise<HeroDTO[]> {
    return await this.repo.find()
      .then(items => items.map(e => HeroDTO.fromEntity(e)));
  }

  public async create(dto: HeroDTO): Promise<HeroDTO> {
    return this.repo.save(dto)
      .then(e => HeroDTO.fromEntity(e));
  }
}

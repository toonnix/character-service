import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HeroCardEntity } from 'src/entity/hero-card.entity';
import { Repository } from 'typeorm';
import { HeroCardDTO } from './hero-card.dto';

@Injectable()
export class HeroCardService {
  constructor(@InjectRepository(HeroCardEntity) private readonly repo: Repository<HeroCardEntity>) { }

  public async getAll(): Promise<HeroCardDTO[]> {
    return await this.repo.find()
      .then(items => items.map(e => HeroCardDTO.fromEntity(e)));
  }

  public async get(heroCode: string): Promise<HeroCardDTO[]> {
    return await this.repo.find({ heroCode })
      .then(items => items.map(e => HeroCardDTO.fromEntity(e)));
  }

  public async create(dto: HeroCardDTO): Promise<HeroCardDTO> {
    return this.repo.save(dto)
      .then(e => HeroCardDTO.fromEntity(e));
  }
}

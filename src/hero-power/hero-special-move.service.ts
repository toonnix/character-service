import { Injectable } from '@nestjs/common';
import { HeroSpecialMoveEntity } from 'src/entity/hero-special-move.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HeroSpecialMoveDTO } from './hero-special-move.dto';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class HeroSpecialMoveService {
  constructor(@InjectRepository(HeroSpecialMoveEntity) private readonly repo: Repository<HeroSpecialMoveEntity>) { }

  public async getAll(): Promise<HeroSpecialMoveDTO[]> {
    return await this.repo.find()
      .then((items: HeroSpecialMoveEntity[]) => items.map((e: HeroSpecialMoveEntity) => HeroSpecialMoveDTO.fromEntity(e)));
  }

  public async get(specialMoveId: string): Promise<HeroSpecialMoveDTO[]> {
    return await this.repo.find({ specialMoveId })
      .then(items => items.map(e => HeroSpecialMoveDTO.fromEntity(e)));
  }

  public async create(dto: HeroSpecialMoveDTO): Promise<HeroSpecialMoveDTO> {
    return this.repo.save(dto)
      .then(e => HeroSpecialMoveDTO.fromEntity(e));
  }

  public async delete(specialMoveId: string): Promise<DeleteResult> {
    return await this.repo.delete({ specialMoveId });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VillainEntity } from 'src/entity/villain.entity';
import { Repository, DeleteResult } from 'typeorm';
import { VillainDTO } from './villain.dto';

@Injectable()
export class VillainService {
  constructor(@InjectRepository(VillainEntity) private readonly repo: Repository<VillainEntity>) { }

  public async getAll(): Promise<VillainDTO[]> {
    return await this.repo.find()
      .then((items: VillainEntity[]) => items.map((e: VillainEntity) => VillainDTO.fromEntity(e)));
  }

  public async get(villainCode: string): Promise<VillainDTO[]> {
    return await this.repo.find({ villainCode })
      .then(items => items.map(e => VillainDTO.fromEntity(e)));
  }

  public async create(dto: VillainDTO): Promise<VillainDTO> {
    return this.repo.save(dto)
      .then(e => VillainDTO.fromEntity(e));
  }

  public async delete(villainCode: string): Promise<DeleteResult> {
    return await this.repo.delete({ villainCode });
  }
}

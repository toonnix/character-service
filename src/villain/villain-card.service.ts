import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VillainCardEntity } from 'src/entity/villain-card.entity';
import { Repository, DeleteResult } from 'typeorm';
import { VillainCardDTO } from './villain-card.dto';

@Injectable()
export class VillainCardService {
  constructor(@InjectRepository(VillainCardEntity) private readonly repo: Repository<VillainCardEntity>) { }

  public async getAll(): Promise<VillainCardDTO[]> {
    return await this.repo.find()
      .then((items: VillainCardEntity[]) => items.map((e: VillainCardEntity) => VillainCardDTO.fromEntity(e)));
  }

  public async findByCardCode(villainCardCode: string): Promise<VillainCardDTO[]> {
    return await this.repo.find({ villainCardCode })
      .then(items => items.map(e => VillainCardDTO.fromEntity(e)));
  }

  public async findByVillainCode(villainCode: string): Promise<VillainCardDTO[]> {
    return await this.repo.find({ villainCode })
      .then(items => items.map(e => VillainCardDTO.fromEntity(e)));
  }

  public async create(dto: VillainCardDTO): Promise<VillainCardDTO> {
    return this.repo.save(dto)
      .then(e => VillainCardDTO.fromEntity(e));
  }

  public async delete(villainCardCode: string): Promise<DeleteResult> {
    return await this.repo.delete({ villainCardCode });
  }
}

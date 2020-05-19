import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HenchmanEntity } from 'src/entity/henchman.entity';
import { Repository, DeleteResult } from 'typeorm';
import { HenchmanDTO } from './henchman.dto';

@Injectable()
export class HenchmanService {
  constructor(@InjectRepository(HenchmanEntity) private readonly repo: Repository<HenchmanEntity>) { }

  public async getAll(): Promise<HenchmanDTO[]> {
    return await this.repo.find()
      .then((items: HenchmanEntity[]) => items.map((e: HenchmanEntity) => HenchmanDTO.fromEntity(e)));
  }

  public async get(henchmanCode: string): Promise<HenchmanDTO[]> {
    return await this.repo.find({ henchmanCode })
      .then(items => items.map(e => HenchmanDTO.fromEntity(e)));
  }

  public async create(dto: HenchmanDTO): Promise<HenchmanDTO> {
    return this.repo.save(dto)
      .then(e => HenchmanDTO.fromEntity(e));
  }

  public async delete(henchmanCode: string): Promise<DeleteResult> {
    return await this.repo.delete({ henchmanCode });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ThreatEntity } from 'src/entity/threat.entity';
import { Repository, DeleteResult } from 'typeorm';
import { ThreatDTO } from './threat.dto';

@Injectable()
export class ThreatService {
  constructor(@InjectRepository(ThreatEntity) private readonly repo: Repository<ThreatEntity>) { }

  public async getAll(): Promise<ThreatDTO[]> {
    return await this.repo.find()
      .then((items: ThreatEntity[]) => items.map((e: ThreatEntity) => ThreatDTO.fromEntity(e)));
  }

  public async get(threatCode: string): Promise<ThreatDTO[]> {
    return await this.repo.find({ threatCode })
      .then(items => items.map(e => ThreatDTO.fromEntity(e)));
  }

  public async create(dto: ThreatDTO): Promise<ThreatDTO> {
    return this.repo.save(dto)
      .then(e => ThreatDTO.fromEntity(e));
  }

  public async delete(threatCode: string): Promise<DeleteResult> {
    return await this.repo.delete({ threatCode });
  }
}

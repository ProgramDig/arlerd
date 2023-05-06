import { Inject, Injectable } from '@nestjs/common';
import { DEGREES_REPOSITORY } from '../degrees.constant';
import { Degrees } from '../models/degrees.model';
import { DegreesCreateDto } from '../dto/DegreesCreate.dto';
import { DegreesCreateManyDto } from '../dto/DegreesCreateMany.dto';

@Injectable()
export class DegreesService {
  constructor(
    @Inject(DEGREES_REPOSITORY) private degreesRepository: typeof Degrees,
  ) {}

  async create(dto: DegreesCreateDto): Promise<Degrees> {
    return this.degreesRepository.create(dto);
  }

  async createMany(dto: DegreesCreateManyDto): Promise<string> {
    for (const degree of dto.list) {
      await this.degreesRepository.create(degree);
    }
    return 'OK';
  }

  async getOne(id: number): Promise<Degrees> {
    return this.degreesRepository.findByPk(id);
  }

  async getAll(): Promise<Degrees[]> {
    return this.degreesRepository.findAll();
  }
}

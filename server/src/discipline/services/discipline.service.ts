import { Inject, Injectable } from "@nestjs/common";
import { DISCIPLINE_REPOSITORY } from "../discipline.constant";
import { Discipline } from "../models/discipline.model";
import { DisciplineCreateDto } from "../dto/DisciplineCreate.dto";

@Injectable()
export class DisciplineService {

  constructor(@Inject(DISCIPLINE_REPOSITORY) private disciplineRepository: typeof Discipline) {
  }

  async create(dto: DisciplineCreateDto): Promise<Discipline> {
    return await this.disciplineRepository.create(dto);
  }

  async getAll(): Promise<Discipline[]> {
    return await this.disciplineRepository.findAll();
  }
}

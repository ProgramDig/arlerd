import { Inject, Injectable } from "@nestjs/common";
import { DISCIPLINE_TEACHER_YEAR_REPOSITORY } from "../discipline-teacher-year.constant";
import { DisciplineTeacherYear } from "../models/discipline-teacher-year.model";
import { DisciplineTeacherYearDto } from "../dto/DisciplineTeacherYear.dto";

@Injectable()
export class DisciplineTeacherYearService {
  constructor(@Inject(DISCIPLINE_TEACHER_YEAR_REPOSITORY) private disciplineTeacherYearRepository: typeof DisciplineTeacherYear) {
  }

  async create(dto: DisciplineTeacherYearDto): Promise<DisciplineTeacherYear> {
    return await this.disciplineTeacherYearRepository.create(dto);
  }

  async getAll(): Promise<DisciplineTeacherYear[]> {
    return await this.disciplineTeacherYearRepository.findAll({ include: { all: true } });
  }
}

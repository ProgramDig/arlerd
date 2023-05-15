import { Inject, Injectable } from "@nestjs/common";
import { GROUP_DISCIPLINE_TEACHER_YEAR_REPOSITORY } from "../group-discipline-teacher-year.constant";
import { GroupDisciplineTeacherYear } from "../models/group-discipline-teacher-year.model";
import { GroupDisciplineTeacherYearCreateDto } from "../dto/GroupDisciplineTeacherYearCreate.dto";

@Injectable()
export class GroupDisciplineTeacherYearService {
  constructor(@Inject(GROUP_DISCIPLINE_TEACHER_YEAR_REPOSITORY) private groupDisciplineTeacherYearRepository: typeof GroupDisciplineTeacherYear) {
  }

  async create(dto: GroupDisciplineTeacherYearCreateDto): Promise<GroupDisciplineTeacherYear> {
    return await this.groupDisciplineTeacherYearRepository.create(dto);
  }

  async getAll(): Promise<GroupDisciplineTeacherYear[]> {
    return await this.groupDisciplineTeacherYearRepository.findAll({ include: { all: true } });
  }
}

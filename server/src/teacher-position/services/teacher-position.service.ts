import { Inject, Injectable } from "@nestjs/common";
import { TEACHER_POSITION_REPOSITORY } from "../teacher-position.constant";
import { TeacherPosition } from "../model/teacher-position.model";
import { TeacherPositionCreateDto } from "../dto/TeacherPositionCreate.dto";

@Injectable()
export class TeacherPositionService {
  constructor(@Inject(TEACHER_POSITION_REPOSITORY) private teacherPositionRepository: typeof TeacherPosition) {
  }

  async create(dto: TeacherPositionCreateDto): Promise<TeacherPosition> {
    return await this.teacherPositionRepository.create(dto);
  }

  async getAll(): Promise<TeacherPosition[]> {
    return await this.teacherPositionRepository.findAll({ include: { all: true } });
  }
}

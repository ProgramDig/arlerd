import { Inject, Injectable } from "@nestjs/common";
import { TEACHER_REPOSITORY } from "../teacher.constant";
import { Teacher } from "../models/teacher.model";
import { CreateTeacherDto } from "../dto/CreateTeacherDto";

@Injectable()
export class TeacherService {
  constructor(@Inject(TEACHER_REPOSITORY) private teacherRepository: typeof Teacher) {
  }

  async create(dto: CreateTeacherDto): Promise<Teacher> {
    return await this.teacherRepository.create(dto);
  }
}

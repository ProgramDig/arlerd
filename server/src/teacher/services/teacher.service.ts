import { Inject, Injectable } from "@nestjs/common";
import { TEACHER_REPOSITORY } from "../teacher.constant";
import { Teacher } from "../models/teacher.model";

@Injectable()
export class TeacherService {
  constructor(@Inject(TEACHER_REPOSITORY) private teacherRepository: typeof Teacher) {
  }

  async create() {

  }
}

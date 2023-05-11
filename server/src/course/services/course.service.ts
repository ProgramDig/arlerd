import { Inject, Injectable } from "@nestjs/common";
import { COURSE_REPOSITORY } from "../course.constant";
import { Course } from "../models/course.model";
import { CourseCreateDto } from "../dto/CourseCreate.dto";

@Injectable()
export class CourseService {
  constructor(@Inject(COURSE_REPOSITORY) private courseRepository: typeof Course) {
  }

  async create(dto: CourseCreateDto): Promise<Course> {
    return await this.courseRepository.create(dto);
  }

  async getAll(): Promise<Course[]> {
    return await this.courseRepository.findAll();
  }
}

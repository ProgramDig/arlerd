import { Body, Controller, Get, Post } from "@nestjs/common";
import { CourseService } from "../services/course.service";
import { CourseCreateDto } from "../dto/CourseCreate.dto";
import { Course } from "../models/course.model";

@Controller("course")
export class CourseController {
  constructor(private courseService: CourseService) {
  }

  @Post("/create")
  create(@Body() dto: CourseCreateDto): Promise<Course> {
    return this.courseService.create(dto);
  }

  @Get("/all")
  getAll(): Promise<Course[]> {
    return this.courseService.getAll();
  }
}

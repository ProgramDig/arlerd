import { Body, Controller, Get, Post } from "@nestjs/common";
import { TeacherService } from "../services/teacher.service";
import { CreateTeacherDto } from "../dto/CreateTeacherDto";
import { Teacher } from "../models/teacher.model";

@Controller("teacher")
export class TeacherController {
  constructor(private teacherService: TeacherService) {
  }

  @Post("/create")
  create(@Body() dto: CreateTeacherDto): Promise<Teacher> {
    return this.teacherService.create(dto);
  }

  @Get("/all")
  getAll(): Promise<Teacher[]> {
    return this.teacherService.getAll();
  }
}

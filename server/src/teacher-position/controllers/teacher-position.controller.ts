import { Body, Controller, Get, Post } from "@nestjs/common";
import { TeacherPositionService } from "../services/teacher-position.service";
import { TeacherPositionCreateDto } from "../dto/TeacherPositionCreate.dto";
import { TeacherPosition } from "../model/teacher-position.model";

@Controller("teacher-position")
export class TeacherPositionController {
  constructor(private teacherPositionService: TeacherPositionService) {
  }

  @Post("/create")
  create(@Body() dto: TeacherPositionCreateDto): Promise<TeacherPosition> {
    return this.teacherPositionService.create(dto);
  }

  @Get("/all")
  getAll(): Promise<TeacherPosition[]> {
    return this.teacherPositionService.getAll();
  }
}

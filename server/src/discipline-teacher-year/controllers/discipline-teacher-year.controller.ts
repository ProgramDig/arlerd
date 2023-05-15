import { Body, Controller, Get, Post } from "@nestjs/common";
import { DisciplineTeacherYearService } from "../services/discipline-teacher-year.service";
import { DisciplineTeacherYearDto } from "../dto/DisciplineTeacherYear.dto";
import { DisciplineTeacherYear } from "../models/discipline-teacher-year.model";

@Controller("discipline-teacher-year")
export class DisciplineTeacherYearController {
  constructor(private disciplineTeacherYearService: DisciplineTeacherYearService) {
  }

  @Post("/create")
  create(@Body() dto: DisciplineTeacherYearDto): Promise<DisciplineTeacherYear> {
    return this.disciplineTeacherYearService.create(dto);
  }

  @Get("/all")
  getAll(): Promise<DisciplineTeacherYear[]> {
    return this.disciplineTeacherYearService.getAll();
  }
}

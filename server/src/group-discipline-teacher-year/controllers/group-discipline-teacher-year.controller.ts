import { Body, Controller, Get, Post } from "@nestjs/common";
import { GroupDisciplineTeacherYearService } from "../services/group-discipline-teacher-year.service";
import { GroupDisciplineTeacherYearCreateDto } from "../dto/GroupDisciplineTeacherYearCreate.dto";
import { GroupDisciplineTeacherYear } from "../models/group-discipline-teacher-year.model";

@Controller("group-discipline-teacher-year")
export class GroupDisciplineTeacherYearController {
  constructor(private groupDisciplineTeacherYearService: GroupDisciplineTeacherYearService) {
  }

  @Post("/create")
  create(@Body() dto: GroupDisciplineTeacherYearCreateDto): Promise<GroupDisciplineTeacherYear> {
    return this.groupDisciplineTeacherYearService.create(dto);
  }

  @Get("/all")
  getAll(): Promise<GroupDisciplineTeacherYear[]> {
    return this.groupDisciplineTeacherYearService.getAll();
  }
}

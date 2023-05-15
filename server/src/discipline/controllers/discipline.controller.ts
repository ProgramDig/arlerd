import { Body, Controller, Get, Post } from "@nestjs/common";
import { DisciplineService } from "../services/discipline.service";
import { DisciplineCreateDto } from "../dto/DisciplineCreate.dto";
import { Discipline } from "../models/discipline.model";

@Controller('discipline')
export class DisciplineController {
  constructor(private disciplineService: DisciplineService) {
  }

  @Post("/create")
  create(@Body() dto: DisciplineCreateDto):Promise<Discipline> {
    return this.disciplineService.create(dto)
  }

  @Get("/all")
  getAll():Promise<Discipline[]> {
    return this.disciplineService.getAll()
  }
}

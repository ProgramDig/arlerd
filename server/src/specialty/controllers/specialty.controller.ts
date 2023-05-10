import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateSpecialtyDto } from "../dto/CreateSpecialty.dto";
import { SpecialtyService } from "../services/specialty.service";
import { Specialty } from "../models/specialty.model";

@Controller("specialty")
export class SpecialtyController {

  constructor(private specialtyService: SpecialtyService) {
  }

  @Post("/create")
  create(@Body() dto: CreateSpecialtyDto): Promise<Specialty> {
    return this.specialtyService.create(dto);
  }

  @Get("/all")
  getAll(): Promise<Specialty[]> {
    return this.specialtyService.getAll();
  }

}

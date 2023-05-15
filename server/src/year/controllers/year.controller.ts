import { Body, Controller, Get, Post } from "@nestjs/common";
import { YearService } from "../services/year.service";
import { YearCreateDto } from "../dto/YearCreate.dto";
import { Year } from "../models/year.model";

@Controller("year")
export class YearController {
  constructor(private yearService: YearService) {
  }

  @Post("/create")
  create(@Body() dto: YearCreateDto): Promise<Year> {
    return this.yearService.create(dto);
  }

  @Get("/all")
  getAll(): Promise<Year[]> {
    return this.yearService.getAll();
  }
}

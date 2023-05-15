import { Body, Controller, Get, Post } from "@nestjs/common";
import { PositionService } from "../services/position.service";
import { PositionCreateDto } from "../dto/PositionCreate.dto";
import { Position } from "../models/position.model";

@Controller("position")
export class PositionController {
  constructor(private positionService: PositionService) {
  }

  @Post("/create")
  create(@Body() dto: PositionCreateDto): Promise<Position> {
    return this.positionService.create(dto);
  }

  @Get("/all")
  getAll(): Promise<Position[]> {
    return this.positionService.getAll();
  }
}

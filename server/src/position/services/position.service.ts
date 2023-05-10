import { Inject, Injectable } from "@nestjs/common";
import { POSITION_REPOSITORY } from "../position.constant";
import { Position } from "../models/position.model";
import { PositionCreateDto } from "../dto/PositionCreate.dto";

@Injectable()
export class PositionService {
  constructor(@Inject(POSITION_REPOSITORY) private positionRepository: typeof Position) {
  }

  async create(dto: PositionCreateDto): Promise<Position> {
    return await this.positionRepository.create(dto);
  }

  async getAll(): Promise<Position[]> {
    return await this.positionRepository.findAll();
  }
}

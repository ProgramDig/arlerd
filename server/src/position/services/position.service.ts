import { Inject, Injectable } from "@nestjs/common";
import { POSITION_REPOSITORY } from "../position.constant";
import { Position } from "../models/position.model";
import { PositionCreateDto } from "../dto/PositionCreate.dto";
import { GetDepartmentCommanderDto } from "../dto/GetDepartmentCommander.dto";

@Injectable()
export class PositionService {
  constructor(@Inject(POSITION_REPOSITORY) private positionRepository: typeof Position) {
  }

  async create(dto: PositionCreateDto): Promise<Position> {
    return await this.positionRepository.create(dto);
  }

  async getAll(): Promise<Position[]> {
    return await this.positionRepository.findAll({ include: { all: true } });
  }

  async getDepartmentCommander(dto: GetDepartmentCommanderDto): Promise<Position> {
    const departmentCommander: Position = await this.positionRepository.findOne({
      where: {
        idDepartment: dto.idDepartment,
        isCommander: true
      },
      include: {
        all: true
      },
      order: [["createdAt", "DESC"]],
      limit: 1
    });
    console.log(departmentCommander);
    return departmentCommander;
  }
}

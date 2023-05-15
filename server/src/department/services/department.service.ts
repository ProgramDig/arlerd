import { Inject, Injectable } from "@nestjs/common";
import { DEPARTMENT_REPOSITORY } from "../department.constant";
import { Department } from "../models/department.model";
import { DepartmentCreateDto } from "../dto/DepartmentCreate.dto";
import { Group } from "../../group/models/group.model";

@Injectable()
export class DepartmentService {
  constructor(@Inject(DEPARTMENT_REPOSITORY) private departmentRepository: typeof Department) {
  }

  async create(dto: DepartmentCreateDto): Promise<Department> {
    return await this.departmentRepository.create(dto);
  }

  async getAll(): Promise<Department[]> {
    return await this.departmentRepository.findAll({ include: { all: true } });
  }

  async getOneByPk(id: number): Promise<Department> {
    return await this.departmentRepository.findByPk(id, { include: { all: true } });
  }
}

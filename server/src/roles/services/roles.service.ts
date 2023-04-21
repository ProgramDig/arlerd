import { Inject, Injectable } from "@nestjs/common";
import { Roles } from "../models/roles.model";
import { CreateRoleDto } from "../dto/CreateRole.dto";
import { ROLES_REPOSITORY } from "../roles.constant";

@Injectable()
export class RolesService {
  constructor(@Inject(ROLES_REPOSITORY) private rolesRepository: typeof Roles) {
  }

  async create(dto: CreateRoleDto): Promise<Roles> {
    return await this.rolesRepository.create(dto);
  }

  async getAll(): Promise<Roles[]> {
    return await this.rolesRepository.findAll();
  }

  async getRoleByValue(value: string): Promise<Roles> {
    return await this.rolesRepository.findOne({ where: { value } });
  }
}

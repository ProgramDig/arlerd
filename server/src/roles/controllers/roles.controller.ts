import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateRoleDto } from "../dto/CreateRole.dto";
import { RolesService } from "../services/roles.service";
import { Roles } from "../models/roles.model";

@Controller("roles")
export class RolesController {
  constructor(private rolesService: RolesService) {
  }

  @Post("/create")
  create(@Body() dto: CreateRoleDto): Promise<Roles> {
    return this.rolesService.create(dto);
  }

  @Get("/all")
  getAll(): Promise<Roles[]> {
    return this.rolesService.getAll();
  }
}

import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateRoleDto } from "../dto/CreateRole.dto";
import { RolesService } from "../services/roles.service";
import { Roles } from "../models/roles.model";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
@ApiTags("Ролі")
@Controller("roles")
export class RolesController {
  constructor(private rolesService: RolesService) {
  }

  @ApiOperation({summary: "Створення ролі"})
  @ApiResponse({status: 200, type: Roles})
  @Post("/create")
  create(@Body() dto: CreateRoleDto): Promise<Roles> {
    return this.rolesService.create(dto);
  }

  @ApiOperation({summary: "Отримання списку ролів"})
  @ApiResponse({status: 200, type: Array<Roles>})
  @Get("/all")
  getAll(): Promise<Roles[]> {
    return this.rolesService.getAll();
  }

  @ApiOperation({summary: "Отримання поточної ролі"})
  @ApiResponse({status: 200, type: Roles})
  @Get("/:value")
  getOne(@Param("value") value: string): Promise<Roles> {
    return this.rolesService.getRoleByValue(value);
  }
}

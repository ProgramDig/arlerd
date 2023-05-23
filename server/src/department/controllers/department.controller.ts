import { Body, Controller, Get, Post } from "@nestjs/common";
import { DepartmentService } from "../services/department.service";
import { Department } from "../models/department.model";
import { DepartmentCreateDto } from "../dto/DepartmentCreate.dto";

@Controller("department")
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {
  }

  @Post("/create")
  create(@Body() dto: DepartmentCreateDto): Promise<Department> {
    return this.departmentService.create(dto);
  }

  @Get("/all")
  getAll(): Promise<Department[]> {
    return this.departmentService.getAll();
  }


}

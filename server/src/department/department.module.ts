import { Module } from '@nestjs/common';
import { DepartmentController } from './controllers/department.controller';
import { DepartmentService } from './services/department.service';
import { departmentProviders } from "./providers/department.providers";
import { DatabaseModule } from "../database/database.module";

@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService, ...departmentProviders],
  exports: [...departmentProviders, DepartmentService],
  imports: [DatabaseModule]
})
export class DepartmentModule {}

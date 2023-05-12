import { Module } from '@nestjs/common';
import { GenerateService } from './services/generate.service';
import { GenerateController } from './cotrollers/generate.controller';
import { DisciplineTeacherYearModule } from "../discipline-teacher-year/discipline-teacher-year.module";
import { DisciplineModule } from "../discipline/discipline.module";
import { YearModule } from "../year/year.module";
import { GroupModule } from "../group/group.module";
import { TeacherModule } from "../teacher/teacher.module";
import { DepartmentModule } from "../department/department.module";

@Module({
  providers: [GenerateService],
  controllers: [GenerateController],
  imports: [
    DisciplineTeacherYearModule,
    DisciplineModule,
    YearModule,
    GroupModule,
    TeacherModule,
    DepartmentModule
  ],
  exports:[]
})
export class GenerateModule {}

import { Module } from '@nestjs/common';
import { DisciplineTeacherYearService } from './services/discipline-teacher-year.service';
import { DisciplineTeacherYearController } from './controllers/discipline-teacher-year.controller';
import { DatabaseModule } from "../database/database.module";
import { disciplineTeacherYearProviders } from "./providers/discipline-teacher-year.providers";

@Module({
  providers: [DisciplineTeacherYearService, ...disciplineTeacherYearProviders],
  controllers: [DisciplineTeacherYearController],
  imports: [DatabaseModule],
  exports:[...disciplineTeacherYearProviders, DisciplineTeacherYearService]
})
export class DisciplineTeacherYearModule {}

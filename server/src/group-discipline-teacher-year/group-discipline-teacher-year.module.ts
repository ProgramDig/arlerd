import { Module } from '@nestjs/common';
import { GroupDisciplineTeacherYearService } from './group-discipline-teacher-year.service';
import { GroupDisciplineTeacherYearController } from './group-discipline-teacher-year.controller';

@Module({
  providers: [GroupDisciplineTeacherYearService],
  controllers: [GroupDisciplineTeacherYearController]
})
export class GroupDisciplineTeacherYearModule {}

import { Module } from "@nestjs/common";
import { GroupDisciplineTeacherYearService } from "./services/group-discipline-teacher-year.service";
import { GroupDisciplineTeacherYearController } from "./controllers/group-discipline-teacher-year.controller";
import { DatabaseModule } from "../database/database.module";
import { groupDisciplineTeacherYearProviders } from "./providers/group-discipline-teacher-year.providers";

@Module({
  providers: [GroupDisciplineTeacherYearService, ...groupDisciplineTeacherYearProviders],
  controllers: [GroupDisciplineTeacherYearController],
  imports: [DatabaseModule],
  exports: [...groupDisciplineTeacherYearProviders]
})
export class GroupDisciplineTeacherYearModule {
}

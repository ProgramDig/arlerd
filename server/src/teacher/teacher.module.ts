import { Module } from "@nestjs/common";
import { TeacherController } from "./controllers/teacher.controller";
import { TeacherService } from "./services/teacher.service";
import { DatabaseModule } from "../database/database.module";
import { teacherProviders } from "./providers/teacher.providers";
import { RanksModule } from "../ranks/ranks.module";
import { DegreesModule } from "../degrees/degrees.module";
import { UsersLoginModule } from "../users-login/users-login.module";


@Module({
  imports: [DatabaseModule, RanksModule, DegreesModule, UsersLoginModule],
  controllers: [TeacherController],
  providers: [TeacherService, ...teacherProviders],
  exports: [...teacherProviders]
})
export class TeacherModule {
}

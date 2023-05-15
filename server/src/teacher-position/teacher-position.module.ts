import { Module } from "@nestjs/common";
import { TeacherPositionController } from "./controllers/teacher-position.controller";
import { TeacherPositionService } from "./services/teacher-position.service";
import { DatabaseModule } from "../database/database.module";
import { teacherPositionProviders } from "./providers/teacher-position.providers";

@Module({
  controllers: [TeacherPositionController],
  providers: [TeacherPositionService, ...teacherPositionProviders],
  exports: [...teacherPositionProviders],
  imports: [DatabaseModule]
})
export class TeacherPositionModule {
}

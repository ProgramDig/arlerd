import { Module } from "@nestjs/common";
import { CourseController } from "./controllers/course.controller";
import { CourseService } from "./services/course.service";
import { courseProviders } from "./providers/course.providers";
import { DatabaseModule } from "../database/database.module";

@Module({
  controllers: [CourseController],
  providers: [CourseService, ...courseProviders],
  exports: [...courseProviders],
  imports: [DatabaseModule]
})
export class CourseModule {
}

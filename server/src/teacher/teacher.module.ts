import { Module } from '@nestjs/common';
import { TeacherController } from './controllers/teacher.controller';
import { TeacherService } from './services/teacher.service';
import { DatabaseModule } from '../database/database.module';
import { teacherProviders } from './providers/teacher.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TeacherController],
  providers: [TeacherService, ...teacherProviders],
  exports: [...teacherProviders],
})
export class TeacherModule {}

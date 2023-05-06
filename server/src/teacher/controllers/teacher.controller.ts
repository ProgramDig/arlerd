import { Controller } from '@nestjs/common';
import { TeacherService } from '../services/teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private teacherService: TeacherService) {}
}

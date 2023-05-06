import { Teacher } from '../models/teacher.model';
import { TEACHER_REPOSITORY } from '../teacher.constant';

export const teacherProviders = [
  {
    provide: TEACHER_REPOSITORY,
    useValue: Teacher,
  },
];

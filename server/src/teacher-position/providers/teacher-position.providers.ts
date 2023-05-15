import { Provider } from "@nestjs/common";
import { TeacherPosition } from "../model/teacher-position.model";
import { TEACHER_POSITION_REPOSITORY } from "../teacher-position.constant";

export const teacherPositionProviders: Provider[] = [
  {
    provide: TEACHER_POSITION_REPOSITORY,
    useValue: TeacherPosition
  }
]
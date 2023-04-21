import { Teacher } from "../models/teacher.model";

export const teacherProviders = [
  {
    provide: "TEACHER_REPOSITORY",
    useValue: Teacher
  }
];
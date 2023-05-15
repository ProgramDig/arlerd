import { Provider } from "@nestjs/common";
import { COURSE_REPOSITORY } from "../course.constant";
import { Course } from "../models/course.model";

export const courseProviders: Provider[] = [
  {
    provide: COURSE_REPOSITORY,
    useValue: Course
  }
];
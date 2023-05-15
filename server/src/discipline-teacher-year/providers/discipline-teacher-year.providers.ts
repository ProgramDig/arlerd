import { Provider } from "@nestjs/common";
import { DISCIPLINE_TEACHER_YEAR_REPOSITORY } from "../discipline-teacher-year.constant";
import { DisciplineTeacherYear } from "../models/discipline-teacher-year.model";

export const disciplineTeacherYearProviders:Provider[] = [
  {
    provide: DISCIPLINE_TEACHER_YEAR_REPOSITORY,
    useValue: DisciplineTeacherYear
  }
]
import { Provider } from "@nestjs/common";
import { GroupDisciplineTeacherYear } from "../models/group-discipline-teacher-year.model";
import { GROUP_DISCIPLINE_TEACHER_YEAR_REPOSITORY } from "../group-discipline-teacher-year.constant";

export const groupDisciplineTeacherYearProviders: Provider[] = [
  {
    provide: GROUP_DISCIPLINE_TEACHER_YEAR_REPOSITORY,
    useValue: GroupDisciplineTeacherYear
  }
];
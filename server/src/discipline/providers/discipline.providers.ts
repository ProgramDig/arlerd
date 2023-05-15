import { Provider } from "@nestjs/common";
import { Discipline } from "../models/discipline.model";
import { DISCIPLINE_REPOSITORY } from "../discipline.constant";

export const disciplineProviders: Provider[] = [
  {
    provide: DISCIPLINE_REPOSITORY,
    useValue: Discipline
  }
];
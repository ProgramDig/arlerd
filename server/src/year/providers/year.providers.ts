import { Provider } from "@nestjs/common";
import { YEAR_REPOSITORY } from "../year.constant";
import { Year } from "../models/year.model";

export const yearProviders: Provider[] = [
  {
    provide: YEAR_REPOSITORY,
    useValue: Year
  }
]
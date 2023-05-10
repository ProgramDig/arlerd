import { Specialty } from "../models/specialty.model";
import { SPECIALTY_REPOSITORY } from "../specialty.constant";
import { Provider } from "@nestjs/common";

export const specialtyProviders: Provider[] = [
  {
    provide: SPECIALTY_REPOSITORY,
    useValue: Specialty
  }
];
import { Provider } from "@nestjs/common";
import { Degrees } from "../models/degrees.model";
import { DEGREES_REPOSITORY } from "../degrees.constant";

export const degreesProviders: Provider[] = [
  {
    provide: DEGREES_REPOSITORY,
    useValue: Degrees
  }
];
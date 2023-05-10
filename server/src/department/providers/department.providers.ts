import { Provider } from "@nestjs/common";
import { Department } from "../models/department.model";
import { DEPARTMENT_REPOSITORY } from "../department.constant";

export const departmentProviders: Provider[] = [
  {
    provide: DEPARTMENT_REPOSITORY,
    useValue: Department
  }
]
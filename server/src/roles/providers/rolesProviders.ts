import { Roles } from "../models/roles.model";
import { Provider } from "@nestjs/common";
import { ROLES_REPOSITORY } from "../roles.constant";

export const rolesProviders: Provider[] = [
  {
    provide: ROLES_REPOSITORY,
    useValue: Roles
  }
]
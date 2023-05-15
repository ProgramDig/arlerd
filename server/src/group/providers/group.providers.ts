import { Provider } from "@nestjs/common";
import { GROUP_REPOSITORY } from "../group.constant";
import { Group } from "../models/group.model";

export const groupProviders: Provider[] = [
  {
    provide: GROUP_REPOSITORY,
    useValue: Group
  }
];
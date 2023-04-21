import { Provider } from "@nestjs/common";
import { Ranks } from "../models/ranks.model";
import { RANKS_REPOSITORY } from "../ranks.constant";

export const ranksProviders: Provider[] = [
  {
    provide: RANKS_REPOSITORY,
    useValue: Ranks
  }
]
import { Provider } from "@nestjs/common";
import { POSITION_REPOSITORY } from "../position.constant";
import { Position } from "../models/position.model";

export const positionProviders: Provider[] = [
  {
    provide: POSITION_REPOSITORY,
    useValue: Position
  }
]
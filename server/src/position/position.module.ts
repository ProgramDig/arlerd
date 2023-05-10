import { Module } from "@nestjs/common";
import { PositionController } from "./controllers/position.controller";
import { PositionService } from "./services/position.service";
import { DatabaseModule } from "../database/database.module";
import { positionProviders } from "./providers/position.providers";

@Module({
  controllers: [PositionController],
  providers: [PositionService, ...positionProviders],
  exports: [...positionProviders],
  imports: [DatabaseModule]
})
export class PositionModule {
}

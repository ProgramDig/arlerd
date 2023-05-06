import { Module } from "@nestjs/common";
import { RanksController } from "./controllers/ranks.controller";
import { RanksService } from "./services/ranks.service";
import { DatabaseModule } from "../database/database.module";
import { ranksProviders } from "./providers/ranks.providers";

@Module({
  controllers: [RanksController],
  providers: [RanksService, ...ranksProviders],
  imports: [DatabaseModule],
  exports: [...ranksProviders, RanksService]
})
export class RanksModule {
}

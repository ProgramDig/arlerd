import { Module } from "@nestjs/common";
import { DisciplineController } from "./controllers/discipline.controller";
import { DisciplineService } from "./services/discipline.service";
import { DatabaseModule } from "../database/database.module";
import { disciplineProviders } from "./providers/discipline.providers";

@Module({
  controllers: [DisciplineController],
  providers: [DisciplineService, ...disciplineProviders],
  imports: [DatabaseModule],
  exports: [...disciplineProviders]
})
export class DisciplineModule {
}

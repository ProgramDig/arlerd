import { Module } from "@nestjs/common";
import { SpecialtyController } from "./controllers/specialty.controller";
import { SpecialtyService } from "./services/specialty.service";
import { DatabaseModule } from "../database/database.module";
import { specialtyProviders } from "./providers/specialty.providers";

@Module({
  controllers: [SpecialtyController],
  providers: [SpecialtyService, ...specialtyProviders],
  exports: [...specialtyProviders],
  imports: [DatabaseModule]
})
export class SpecialtyModule {
}

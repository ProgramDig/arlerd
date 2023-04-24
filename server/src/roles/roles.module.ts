import { Module } from "@nestjs/common";
import { RolesService } from "./services/roles.service";
import { RolesController } from "./controllers/roles.controller";
import { DatabaseModule } from "../database/database.module";
import { rolesProviders } from "./providers/rolesProviders";

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    RolesService,
    ...rolesProviders
  ],
  controllers: [RolesController],
  exports: [
    ...rolesProviders,
    RolesService
  ]
})
export class RolesModule {
}

import { Module } from "@nestjs/common";
import { GroupController } from "./controllers/group.controller";
import { GroupService } from "./services/group.service";
import { DatabaseModule } from "../database/database.module";
import { groupProviders } from "./providers/group.providers";

@Module({
  controllers: [GroupController],
  providers: [GroupService, ...groupProviders],
  exports: [...groupProviders, GroupService],
  imports: [DatabaseModule]
})
export class GroupModule {
}

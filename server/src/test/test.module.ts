import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { TestService } from "./test.service";
import { TestController } from "./test.controller";
import { testProviders } from "./test.providers";

@Module({
  imports: [DatabaseModule],
  providers: [TestService, ...testProviders],
  controllers: [TestController],
  exports: [...testProviders]
})
export class TestModule {
}

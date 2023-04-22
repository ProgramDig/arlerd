import { Module } from "@nestjs/common";

import { DatabaseModule } from "./database/database.module";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { RolesModule } from "./roles/roles.module";
import { RanksModule } from './ranks/ranks.module';
import { DegreesService } from './degrees/services/degrees.service';
import { DegreesModule } from './degrees/degrees.module';
import * as process from "process";

@Module({
  controllers: [],
  providers: [DegreesService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    DatabaseModule,
    UsersModule,
    RolesModule,
    RanksModule,
    DegreesModule
  ],
  exports: []
})
export class AppModule {

}
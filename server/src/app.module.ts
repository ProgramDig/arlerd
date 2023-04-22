import { Module } from "@nestjs/common";

import { DatabaseModule } from "./database/database.module";
import { UsersLoginModule } from "./users-login/users-login.module";
import { ConfigModule } from "@nestjs/config";
import { RolesModule } from "./roles/roles.module";
import { RanksModule } from './ranks/ranks.module';
import { DegreesService } from './degrees/services/degrees.service';
import { DegreesModule } from './degrees/degrees.module';
import { TeacherModule } from './teacher/teacher.module';
import * as process from "process";

@Module({
  controllers: [],
  providers: [DegreesService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    DatabaseModule,
    UsersLoginModule,
    RolesModule,
    RanksModule,
    DegreesModule,
    TeacherModule
  ],
  exports: []
})
export class AppModule {

}
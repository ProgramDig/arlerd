import { Module } from "@nestjs/common";

import { DatabaseModule } from "./database/database.module";
import { UsersLoginModule } from "./users-login/users-login.module";
import { ConfigModule } from "@nestjs/config";
import { RolesModule } from "./roles/roles.module";
import { RanksModule } from './ranks/ranks.module';
import { DegreesService } from './degrees/services/degrees.service';
import { DegreesModule } from './degrees/degrees.module';
import { TeacherModule } from './teacher/teacher.module';
import { AuthService } from './auth/services/auth.service';
import { AuthController } from './auth/controllers/auth.controller';
import { AuthModule } from './auth/auth.module';
import * as process from "process";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    DatabaseModule,
    UsersLoginModule,
    RolesModule,
    RanksModule,
    DegreesModule,
    TeacherModule,
    AuthModule
  ],
  exports: []
})
export class AppModule {

}
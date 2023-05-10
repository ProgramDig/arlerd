import { Module } from "@nestjs/common";

import { DatabaseModule } from "./database/database.module";
import { UsersLoginModule } from "./users-login/users-login.module";
import { ConfigModule } from "@nestjs/config";
import { RolesModule } from "./roles/roles.module";
import { RanksModule } from "./ranks/ranks.module";
import { DegreesModule } from "./degrees/degrees.module";
import { TeacherModule } from "./teacher/teacher.module";
import { AuthModule } from "./auth/auth.module";
import { TokensModule } from "./tokens/tokens.module";
import { TestModule } from "./test/test.module";
import { SpecialtyModule } from './specialty/specialty.module';
import * as process from "process";
import { DepartmentModule } from "./department/department.module";
import { PositionModule } from './position/position.module';

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
    AuthModule,
    TokensModule,
    TestModule,
    SpecialtyModule,
    DepartmentModule,
    PositionModule
  ],
  exports: []
})
export class AppModule {

}
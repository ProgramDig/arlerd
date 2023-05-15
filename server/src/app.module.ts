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
import { SpecialtyModule } from "./specialty/specialty.module";
import * as process from "process";
import { DepartmentModule } from "./department/department.module";
import { PositionModule } from "./position/position.module";
import { DisciplineModule } from "./discipline/discipline.module";
import { YearModule } from "./year/year.module";
import { TeacherPositionModule } from "./teacher-position/teacher-position.module";
import { DisciplineTeacherYearModule } from "./discipline-teacher-year/discipline-teacher-year.module";
import { CourseModule } from "./course/course.module";
import { GroupModule } from "./group/group.module";
import { GroupDisciplineTeacherYearModule } from "./group-discipline-teacher-year/group-discipline-teacher-year.module";
import { GenerateModule } from './generate/generate.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from "path";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public")
    }),
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
    PositionModule,
    DisciplineModule,
    YearModule,
    TeacherPositionModule,
    DisciplineTeacherYearModule,
    CourseModule,
    GroupModule,
    GroupDisciplineTeacherYearModule,
    GenerateModule
  ],
  exports: []
})
export class AppModule {

}
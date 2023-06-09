import { Sequelize } from "sequelize-typescript";
import * as process from "process";
import { UsersLogin } from "../users-login/models/users-login.model";
import { Teacher } from "../teacher/models/teacher.model";
import { Roles } from "../roles/models/roles.model";
import { Provider } from "@nestjs/common";
import { Ranks } from "../ranks/models/ranks.model";
import { Degrees } from "../degrees/models/degrees.model";
import { Tokens } from "../tokens/models/tokens.model";
import { Test } from "../test/test.model";
import { Specialty } from "../specialty/models/specialty.model";
import { Department } from "../department/models/department.model";
import { Position } from "../position/models/position.model";
import { Discipline } from "../discipline/models/discipline.model";
import { Year } from "../year/models/year.model";
import { TeacherPosition } from "../teacher-position/model/teacher-position.model";
import { DisciplineTeacherYear } from "../discipline-teacher-year/models/discipline-teacher-year.model";
import { Course } from "../course/models/course.model";
import { Group } from "../group/models/group.model";
import {
  GroupDisciplineTeacherYear
} from "../group-discipline-teacher-year/models/group-discipline-teacher-year.model";

export const databaseProviders: Provider[] = [
  {
    provide: "SEQUELIZE",
    useFactory: async (): Promise<Sequelize> => {
      const sequelize: Sequelize = new Sequelize({
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
      });
      sequelize.addModels([
        UsersLogin,
        Teacher,
        Roles,
        Ranks,
        Degrees,
        Tokens,
        Test,
        Specialty,
        Department,
        Position,
        Discipline,
        Year,
        TeacherPosition,
        DisciplineTeacherYear,
        Course,
        Group,
        GroupDisciplineTeacherYear
      ]);
      await sequelize.sync();
      return sequelize;
    }
  }
];
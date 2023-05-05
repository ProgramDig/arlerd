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
        Test
      ]);
      await sequelize.sync();
      return sequelize;
    }
  }
];
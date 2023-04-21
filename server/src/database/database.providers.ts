import { Sequelize } from "sequelize-typescript";
import * as process from "process";
import { UsersLogin } from "../users/models/users-login.model";
import { Teacher } from "../users/models/teacher.model";
import { Roles } from "../roles/models/roles.model";
import { Provider } from "@nestjs/common";
import { Ranks } from "../ranks/models/ranks.model";

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
        Ranks
      ]);
      await sequelize.sync();
      return sequelize;
    }
  }
];
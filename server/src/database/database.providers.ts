import {Sequelize} from "sequelize-typescript";
import * as process from "process";
import { UsersLogin } from "../users/users.model";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async (): Promise<Sequelize> => {
            const sequelize: Sequelize = new Sequelize({
                dialect: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
            });
            sequelize.addModels([UsersLogin]);
            await sequelize.sync();
            return sequelize;
        },
    }
]
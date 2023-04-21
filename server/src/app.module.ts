import {Module} from "@nestjs/common";

import {DatabaseModule} from "./database/database.module";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
           envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        DatabaseModule,
        UsersModule
    ],
    exports: []
})
export class AppModule {

}
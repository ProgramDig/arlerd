import { Module } from '@nestjs/common';
import { UsersLoginController } from './controllers/users-login.controller';
import { UsersLoginService } from './services/users-login.service';
import { DatabaseModule } from "../database/database.module";
import { usersLoginProviders } from "./providers/users-login.providers";

@Module({
  controllers: [UsersLoginController],
  providers: [
    UsersLoginService,
    ...usersLoginProviders,
  ],
  imports:[DatabaseModule]

})
export class UsersLoginModule {}

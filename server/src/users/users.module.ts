import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { DatabaseModule } from "../database/database.module";
import { usersLoginProviders } from "./providers/users-login.providers";
import { teacherProviders } from "./providers/teacher.providers";

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    ...usersLoginProviders,
    ...teacherProviders
  ],
  imports:[DatabaseModule]

})
export class UsersModule {}

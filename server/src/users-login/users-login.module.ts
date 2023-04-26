import { Module } from '@nestjs/common';
import { UsersLoginController } from './controllers/users-login.controller';
import { UsersLoginService } from './services/users-login.service';
import { DatabaseModule } from "../database/database.module";
import { usersLoginProviders } from "./providers/users-login.providers";
import { RolesModule } from "../roles/roles.module";
import { TokensModule } from "../tokens/tokens.module";

@Module({
  controllers: [UsersLoginController],
  providers: [
    UsersLoginService,
    ...usersLoginProviders,
  ],
  imports:[DatabaseModule, RolesModule, TokensModule],
  exports:[UsersLoginService]
})
export class UsersLoginModule {}

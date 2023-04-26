import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { UsersLoginModule } from "../users-login/users-login.module";
import { JwtModule } from "@nestjs/jwt";
import * as process from "process";
import { RolesModule } from "../roles/roles.module";
import { TokensModule } from "../tokens/tokens.module";

@Module({
  imports: [UsersLoginModule, DatabaseModule, RolesModule, TokensModule, JwtModule.register({
    secret: process.env.ACCESS_PRIVATE_KEY || "SECRET",
    signOptions: { expiresIn: "24h" }
  })],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService, JwtModule]
})
export class AuthModule {
}

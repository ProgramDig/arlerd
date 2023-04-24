import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { UsersLoginModule } from "../users-login/users-login.module";
import { JwtModule } from "@nestjs/jwt";
import * as process from "process";
import { RolesModule } from "../roles/roles.module";
import { rolesProviders } from "../roles/providers/rolesProviders";

@Module({
  imports: [UsersLoginModule, DatabaseModule, RolesModule, JwtModule.register({
    secret: process.env.PRIVATE_KEY || "SECRET",
    signOptions: { expiresIn: "24h" }
  })],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService, JwtModule]
})
export class AuthModule {
}

import { Module } from "@nestjs/common";
import { TokensController } from "./controllers/tokens.controller";
import { TokensService } from "./services/tokens.service";
import { tokensProviders } from "./providers/tokens.providers";
import { DatabaseModule } from "../database/database.module";
import { JwtModule } from "@nestjs/jwt";
import * as process from "process";

@Module({
  imports: [DatabaseModule, JwtModule.register({
    secret: process.env.PRIVATE_KEY || "SECRET",
    signOptions: { expiresIn: "24h" }
  })],
  controllers: [TokensController],
  providers: [TokensService, ...tokensProviders],
  exports: [...tokensProviders, TokensService]
})
export class TokensModule {
}

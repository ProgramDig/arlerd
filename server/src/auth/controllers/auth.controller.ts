import { Body, Controller, Post, Res } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserLoginDto } from "../../users-login/dto/CreateUserLogin.dto";
import { AuthService } from "../services/auth.service";
import { Response } from "express";

@ApiTags("Авторизація")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @ApiOperation({ summary: "Логін" })
  @ApiResponse({ status: 200, type: String })
  @Post("/login")
  async login(@Body() userLoginDto: CreateUserLoginDto, @Res({ passthrough: true }) response: Response) {
    const userData = await this.authService.login(userLoginDto);
    response.cookie("refreshToken", userData.refreshToken);
    return userData;
  }

  @ApiOperation({ summary: "Реєстрація" })
  @ApiResponse({ status: 200, type: String })
  @Post("/registration")
  async registration(@Body() userLoginDto: CreateUserLoginDto, @Res({ passthrough: true }) response: Response) {
    const userData = await this.authService.registration(userLoginDto);
    response.cookie("refreshToken", userData.refreshToken);
    return userData;
  }

  @Post("/is-role")
  isRole(@Body() dto) {
    return this.authService.isRole(dto);
  }
}

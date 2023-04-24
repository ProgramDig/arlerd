import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserLoginDto } from "../../users-login/dto/CreateUserLogin.dto";
import { AuthService } from "../services/auth.service";

@ApiTags("Авторизація")
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @ApiOperation({summary:"Логін"})
  @ApiResponse({status:200, type: String})
  @Post("/login")
  login(@Body() userLoginDto: CreateUserLoginDto) {
    return this.authService.login(userLoginDto);
  }

  @ApiOperation({summary:"Реєстрація"})
  @ApiResponse({status:200, type: String})
  @Post("/registration")
  registration(@Body() userLoginDto: CreateUserLoginDto) {
    return this.authService.registration(userLoginDto);
  }
}

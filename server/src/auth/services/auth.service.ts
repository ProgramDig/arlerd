import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserLoginDto } from "../../users-login/dto/CreateUserLogin.dto";
import { UsersLoginService } from "../../users-login/services/users-login.service";
import * as bcrypt from "bcryptjs";
import { UsersLogin } from "../../users-login/models/users-login.model";
import { TokensService } from "../../tokens/services/tokens.service";
import { JwtService } from "@nestjs/jwt";
import { UserDto } from "../dto/user.dto";
import { TeacherService } from "../../teacher/services/teacher.service";

@Injectable()
export class AuthService {

  constructor(private userLoginService: UsersLoginService,
              private tokenService: TokensService,
              private jwtService: JwtService,
              private teacherService: TeacherService) {
  }

  async login(userLoginDto: CreateUserLoginDto) {
    const user: UsersLogin = await this.validateUser(userLoginDto);
    const userDto: UserDto = {
      id: user.id,
      login: user.login,
      email: user.email,
      isActivated: user.isActivated,
      role: user.role.value
    };
    const teacher = await this.teacherService.getByUserLoginId(user.id);
    return { ...this.tokenService.generateTokens(user), user: userDto, teacher: teacher };
  }

  async registration(userLoginDto: CreateUserLoginDto) {
    const { email, login, password, role }: CreateUserLoginDto = userLoginDto;
    const candidate: UsersLogin = await this.userLoginService.getUserByEmailOrLogin(login, email);
    if (candidate) {
      throw new HttpException("Користувач з таким логіном або поштою вже створений", HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user: UsersLogin = await this.userLoginService.createUser({ email, login, role, password: hashPassword });
    return { ...this.tokenService.generateTokens(user), role: user.idRole, userId: user.id };
  }

  async validateUser(userLoginDto: CreateUserLoginDto): Promise<UsersLogin> {
    const user: UsersLogin = await this.userLoginService.getUserByEmailOrLogin(userLoginDto.login, userLoginDto.email);
    const passwordEquals = await bcrypt.compare(userLoginDto.password, user.password);
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: "Невірні введені дані при логіні" });
  }

  async isRole(dto) {
    const user = this.jwtService.verify(dto.token);
    if (user.role === dto.role) {
      return { role: user.role };
    }
    throw new HttpException("Немає доступа", HttpStatus.NOT_FOUND);
  }
}

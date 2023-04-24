import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserLoginDto } from "../../users-login/dto/CreateUserLogin.dto";
import { UsersLoginService } from "../../users-login/services/users-login.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { UsersLogin } from "../../users-login/models/users-login.model";

@Injectable()
export class AuthService {

  constructor(private userLoginService: UsersLoginService, private jwtService: JwtService) {
  }

  async login(userLoginDto: CreateUserLoginDto) {
    const user: UsersLogin = await this.validateUser(userLoginDto);
    return this.generateToken(user);
  }

  async registration(userLoginDto: CreateUserLoginDto) {
    const { email, login, password } = userLoginDto;
    const candidate: UsersLogin = await this.userLoginService.getUserByEmailOrLogin(login, email);
    if (candidate) {
      throw new HttpException("Користувач з таким логіном або поштою вже створений", HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user: UsersLogin = await this.userLoginService.createUser({ email, login, password: hashPassword });
    return this.generateToken(user);
  }

  async generateToken(user: UsersLogin) {
    const payload = { email: user.email, login: user.login, id: user.id, role: user.idRole };
    return {
      token: this.jwtService.sign(payload),
      role: user.idRole
    };
  }

  async validateUser(userLoginDto: CreateUserLoginDto) {
    const user: UsersLogin = await this.userLoginService.getUserByEmailOrLogin(userLoginDto.login, userLoginDto.email);
    console.log(user);
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

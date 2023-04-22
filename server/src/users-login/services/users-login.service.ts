import { Inject, Injectable } from "@nestjs/common";
import { UsersLogin } from "../models/users-login.model";
import { CreateUserLoginDto } from "../dto/CreateUserLogin.dto";
import { USERS_LOGIN_REPOSITORY } from "../users-login.constant";

@Injectable()
export class UsersLoginService {
  constructor(@Inject(USERS_LOGIN_REPOSITORY) private usersLoginRepository: typeof UsersLogin) {}

  async createUser(dto: CreateUserLoginDto): Promise<void> {
    const user = await this.usersLoginRepository.create(dto);
  }

  async getAllUser(): Promise<void> {

  }
}

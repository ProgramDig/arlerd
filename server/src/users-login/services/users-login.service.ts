import { Inject, Injectable } from "@nestjs/common";
import { UsersLogin } from "../models/users-login.model";
import { CreateUserLoginDto } from "../dto/CreateUserLogin.dto";
import { USERS_LOGIN_REPOSITORY } from "../users-login.constant";
import { Op } from "sequelize";
import { Roles } from "../../roles/models/roles.model";
import { RolesService } from "../../roles/services/roles.service";
import { v4 as uuid } from "uuid";

@Injectable()
export class UsersLoginService {
  constructor(
    @Inject(USERS_LOGIN_REPOSITORY) private usersLoginRepository: typeof UsersLogin,
    private roleService: RolesService) {
  }

  async createUser(dto: CreateUserLoginDto): Promise<UsersLogin> {
    const user: UsersLogin = await this.usersLoginRepository.create(dto);
    const role: Roles = await this.roleService.getRoleByValue("USER");
    await user.setDataValue("idRole", role.id);
    user.role = role;
    user.activatedLink = uuid();
    return user;
  }

  async getAllUser(): Promise<UsersLogin[]> {
    return await this.usersLoginRepository.findAll({ include: { all: true } });
  }

  async getUserByEmailOrLogin(login: string | null, email: string | null): Promise<UsersLogin> {
    return await this.usersLoginRepository.findOne({
      where: {
        [Op.or]: [{ login: login ? login : null }, { email: email ? email : null }]
      },
      include: {
        all: true
      }
    });
  }
}
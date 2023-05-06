import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UsersLogin } from '../models/users-login.model';
import { CreateUserLoginDto } from '../dto/CreateUserLogin.dto';
import { USERS_LOGIN_REPOSITORY } from '../users-login.constant';
import { Op } from 'sequelize';
import { Roles } from '../../roles/models/roles.model';
import { RolesService } from '../../roles/services/roles.service';
import { v4 as uuid } from 'uuid';
import { TokensService } from '../../tokens/services/tokens.service';
import { GenerateTokens } from '../types';
// import { Tokens } from '../../tokens/models/tokens.model';

@Injectable()
export class UsersLoginService {
  constructor(
    @Inject(USERS_LOGIN_REPOSITORY)
    private usersLoginRepository: typeof UsersLogin,
    private roleService: RolesService,
    private tokenService: TokensService,
  ) {}

  async createUser(dto: CreateUserLoginDto): Promise<UsersLogin> {
    const user: UsersLogin = await this.usersLoginRepository.create(dto);
    const role: Roles = await this.roleService.getRoleByValue('USER');
    if (!role) {
      throw new BadRequestException('Такої ролі немає в базі');
    }

    const tokens: GenerateTokens = await this.tokenService.generateTokens(user);
    user.idTokens = await this.tokenService.saveToken(
      user.id,
      tokens.refreshToken,
    );

    user.idRole = role.id;
    user.activatedLink = uuid();
    await user.save();
    return user;
  }

  async getAllUser(): Promise<UsersLogin[]> {
    return await this.usersLoginRepository.findAll({ include: { all: true } });
  }

  async getUserByEmailOrLogin(
    login: string | null,
    email: string | null,
  ): Promise<UsersLogin> {
    console.log(login, email);
    return await this.usersLoginRepository.findOne({
      where: {
        [Op.or]: [
          { login: login ? login : null },
          { email: email ? email : null },
        ],
      },
      include: {
        all: true,
      },
    });
  }

  async removeAll(): Promise<number> {
    return await this.usersLoginRepository.destroy({
      where: {},
      truncate: true,
    });
  }
}

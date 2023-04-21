import { Inject, Injectable } from "@nestjs/common";
import { UsersLogin } from "../models/users-login.model";
import { CreateUserDto } from "../dto/CreateUser.dto";
import { Teacher } from "../models/teacher.model";

@Injectable()
export class UsersService {
  constructor(
    @Inject("USERS_LOGIN_REPOSITORY") private usersLoginRepository: typeof UsersLogin,
    @Inject("TEACHER_REPOSITORY") private teacherRepository: typeof Teacher) {}

  async createUser(dto: CreateUserDto): Promise<void> {
    const user = await this.usersLoginRepository.create(dto);
  }

  async getAllUser(): Promise<void> {

  }
}

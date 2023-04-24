import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateUserLoginDto } from "../dto/CreateUserLogin.dto";
import { UsersLoginService } from "../services/users-login.service";
import { UsersLogin } from "../models/users-login.model";

@Controller("users-login")
export class UsersLoginController {
  constructor(private userLoginService: UsersLoginService) {
  }

  @Post("/create")
  create(@Body() dto: CreateUserLoginDto): Promise<UsersLogin> {
    return this.userLoginService.createUser(dto);
  }

  @Get("/all")
  getAll(): Promise<UsersLogin[]> {
    return this.userLoginService.getAllUser();
  }

  @Get("/:login,:email")
  getByEmailOrLogin(@Param("login") login: string, @Param("email") email: string): Promise<UsersLogin> {
    return this.userLoginService.getUserByEmailOrLogin(login, email);
  }

  @Delete("/delete-all")
  removeAll(): Promise<number> {
    return this.userLoginService.removeAll();
  }
}

import { UsersLogin } from "../models/users-login.model";
import { USERS_LOGIN_REPOSITORY } from "../users-login.constant";
import { Provider } from "@nestjs/common";

export const usersLoginProviders: Provider[] = [
  {
    provide: USERS_LOGIN_REPOSITORY,
    useValue: UsersLogin
  }
];
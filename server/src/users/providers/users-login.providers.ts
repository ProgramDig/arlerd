import { UsersLogin } from "../models/users-login.model";

export const usersLoginProviders = [
  {
    provide: "USERS_LOGIN_REPOSITORY",
    useValue: UsersLogin
  }
];
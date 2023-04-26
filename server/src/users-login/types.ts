import { Roles } from "../roles/models/roles.model";

export type Payload = {
  email: string,
  login: string,
  id: number,
  role: number
}

export type GenerateTokens = {
  accessToken: string
  refreshToken: string
  role: Roles
}
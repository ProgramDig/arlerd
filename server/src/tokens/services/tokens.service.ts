import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersLogin } from '../../users-login/models/users-login.model';
import { GenerateTokens, Payload } from '../../users-login/types';
import * as process from 'process';
import { TOKENS_REPOSITORY } from '../tokens.constant';
import { Tokens } from '../models/tokens.model';

@Injectable()
export class TokensService {
  constructor(
    @Inject(TOKENS_REPOSITORY) private tokenRepository: typeof Tokens,
    private jwtService: JwtService,
  ) {}

  generateTokens(user: UsersLogin): GenerateTokens {
    const payload: Payload = {
      email: user.email,
      login: user.login,
      id: user.id,
      role: user.idRole,
    };
    return {
      accessToken: this.jwtService.sign(payload, {
        expiresIn: '1h',
        secret: process.env.ACCESS_PRIVATE_KEY,
      }),
      refreshToken: this.jwtService.sign(payload, {
        expiresIn: '30d',
        secret: process.env.REFRESH_PRIVATE_KEY,
      }),
      role: user.role,
    };
  }

  validateAccessToken(token: string) {
    try {
      return this.jwtService.verify(token, {
        secret: process.env.ACCESS_PRIVATE_KEY,
      });
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      return this.jwtService.verify(token, {
        secret: process.env.REFRESH_PRIVATE_KEY,
      });
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId: number, refreshToken: string): Promise<Tokens> {
    const tokenData: Tokens = await this.tokenRepository.findOne({
      where: {
        userId,
      },
    });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    return await this.tokenRepository.create({ userId, refreshToken });
  }

  async removeToken(refreshToken: string): Promise<number> {
    return await this.tokenRepository.destroy({ where: { refreshToken } });
  }

  async findToken(refreshToken: string): Promise<Tokens> {
    return await this.tokenRepository.findOne({ where: { refreshToken } });
  }
}

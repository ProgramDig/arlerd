import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from '../decorators/role-auth.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles: string[] = this.reflector.getAllAndOverride<
        string[]
      >(ROLES_KEY, [context.getHandler(), context.getClass()]);

      if (!requiredRoles) {
        return true;
      }

      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({
          message: 'Користувач не авторизований',
        });
      }

      const user = this.jwtService.verify(token);
      req.user = user;
      return requiredRoles.includes(user.role);
    } catch (error) {
      throw new HttpException('Немає доступа', HttpStatus.FORBIDDEN);
    }
  }
}

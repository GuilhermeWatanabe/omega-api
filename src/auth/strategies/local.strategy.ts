import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate({ email, password }: LoginDto) {
    const user = await this.authService.validateUser({ email, password });

    if (!user) throw new UnauthorizedException('Senha ou email inválido');

    return user;
  }
}

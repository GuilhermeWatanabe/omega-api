import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email, password) {
    let user: User;
    try {
      user = await this.userService.findOneOrFail({ email });
    } catch (err) {
      return null;
    }

    const passwordIsValid = compareSync(password, user.password);
    if (!passwordIsValid) return null;

    return user;
  }

  async login(user) {
    const payload = { sub: user.public_id, email: user.email };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async verify(token) {
    return this.jwtService.verify(token);
  }
}

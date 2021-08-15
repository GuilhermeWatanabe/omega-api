import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRespository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassowrd = await bcrypt.hash(
      createUserDto.password,
      process.env.SALT,
    );
    try {
      const user = this.userRespository.create({
        ...createUserDto,
        public_id: uuid(),
        password: hashedPassowrd,
      });
      await this.userRespository.save(user);
      user.password = undefined;
      return user;
    } catch (err) {
      console.log(err);
    }
  }
}

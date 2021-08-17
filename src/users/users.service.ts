import { BadRequestException, Injectable } from '@nestjs/common';
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
    const user = await this.userRespository.findOne({
      email: createUserDto.email,
    });

    if (user) throw new BadRequestException('Email already registered');

    const newUser = this.userRespository.create({
      ...createUserDto,
      public_id: uuid(),
    });
    await this.userRespository.save(newUser);
    delete newUser.password;
    return newUser;
  }
}

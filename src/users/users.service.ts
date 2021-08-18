import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuid } from 'uuid';

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

    if (user) throw new BadRequestException('Email já cadastrado!');
    try {
      const newUser = this.userRespository.create({
        ...createUserDto,
        public_id: uuid(),
      });
      await this.userRespository.save(newUser);
      delete newUser.password;
      return newUser;
    } catch (err) {
      throw new BadRequestException('Não foi possivel criar o usuário!');
    }
  }

  async findOneOrFail(
    conditions: FindConditions<User>,
    options?: FindOneOptions<User>,
  ) {
    try {
      const user = await this.userRespository.findOneOrFail(
        conditions,
        options,
      );
      return user;
    } catch (error) {
      throw new NotFoundException('Usuário não existe!');
    }
  }
}

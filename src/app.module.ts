import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { ProposalController } from './controller/proposal.controller';
import { ProposalService } from './service/proposal.service';

@Module({
  imports: [],
  controllers: [UserController, ProposalController],
  providers: [UserService, ProposalService],
=======
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ProposalsModule } from './proposals/proposals.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPE_CONNECTION,
      host: process.env.HOST,
      port: process.env.PORT,
      database: process.env.DATABASE,
      username: process.env.DATABASE,
      password: process.env.PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    } as TypeOrmModuleOptions),
    ProposalsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
>>>>>>> database/master
})
export class AppModule {}

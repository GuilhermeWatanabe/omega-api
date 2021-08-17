import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProposalsModule } from './proposals/proposals.module';

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
    UsersModule,
    ProposalsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

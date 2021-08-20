import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ProposalsModule } from './proposals/proposals.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "chunee.db.elephantsql.com",
      port: 5432,
      database: "nxgxqmqk",
      username: "nxgxqmqk",
      password: "WnzDzup5gzXdMdcluj8IQMLQzsZa1nvu",
      autoLoadEntities: true,
      synchronize: true,
    } as TypeOrmModuleOptions),
    ProposalsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

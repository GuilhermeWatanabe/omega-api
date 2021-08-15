import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProposalsModule } from './proposals/proposals.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, ProposalsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

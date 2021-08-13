import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { ProposalController } from './controller/proposal.controller';
import { ProposalService } from './service/proposal.service';

@Module({
  imports: [],
  controllers: [UserController, ProposalController],
  providers: [UserService, ProposalService],
})
export class AppModule {}

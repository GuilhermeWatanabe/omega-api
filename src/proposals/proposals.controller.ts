import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ProposalsService } from './proposals.service';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('proposals')
export class ProposalsController {
  constructor(private readonly proposalsService: ProposalsService) {}

  @Post()
  create(@Body() createProposalDto: CreateProposalDto, @Request() req) {
    createProposalDto.user = req.user.id;
    return this.proposalsService.create(createProposalDto);
  }

  @Get()
  async findAll(@Request() req) {
    const { id } = req.user;
    return await this.proposalsService.findAll(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    return await this.proposalsService.findOneOrFail({
      public_id: id,
      user: req.user.id,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.proposalsService.update(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
      
    return this.proposalsService.remove(id);
  }
}

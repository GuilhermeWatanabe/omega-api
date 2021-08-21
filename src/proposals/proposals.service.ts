import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { Proposal } from './entities/proposal.entity';
import { v4 as uuid } from 'uuid';
import { Submarket } from './dto/submarket.enum';
import { EnergySource } from './dto/energySource.enum';

@Injectable()
export class ProposalsService {
  constructor(
    @InjectRepository(Proposal)
    private proposalRepository: Repository<Proposal>,
  ) {}

  async create(createProposalDto: CreateProposalDto) {
    const loads = createProposalDto.loads.reduce(
      (accumulator, currentValue) => {
        return accumulator + parseFloat(currentValue.consumption_kwh);
      },
      0,
    );

    const valueSubmarket = Submarket[createProposalDto.submarket];
    const valueSource = EnergySource[createProposalDto.energy_source];
    const total_value = loads * 10 + valueSource + valueSubmarket;

    const proposal = this.proposalRepository.create({
      ...createProposalDto,
      public_id: uuid(),
      total_consumption: loads + 'kW',
      proposal_value: 'R$ ' + total_value,
    });
    const newProposal = await this.proposalRepository.save(proposal);
    newProposal.loads.forEach((load) => {
      delete load.id;
    });
    delete newProposal.user;
    return newProposal;
  }

  async findAll(id: number) {
    return await this.proposalRepository.find({ where: { user: id } });
  }

  async findOneOrFail(
    conditions: FindConditions<Proposal>,
    options?: FindOneOptions<Proposal>,
  ) {
    try {
      const proposal = await this.proposalRepository.findOneOrFail(
        conditions,
        options,
      );
      return proposal;
    } catch (error) {
      throw new NotFoundException('Proposta não encontrada');
    }
  }

  async update(id: string) {
    const proposal = await this.findOneOrFail({ public_id: id });
    delete proposal.id;
    proposal.hired = true;
    return await this.proposalRepository.save(proposal);
  }

  async remove(id: string) {
    const proposal = await this.findOneOrFail({ public_id: id });
    if (proposal.hired)
      throw new BadRequestException(
        'It is not possible to delete an accepted proposal',
      );
    return await this.proposalRepository.remove(proposal);
  }
}

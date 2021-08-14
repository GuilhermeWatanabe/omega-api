import { Controller, Get, Post, Body } from "@nestjs/common";
import { ProposalService } from "src/service/proposal.service";
import { Proposal } from "src/model/proposal.model";

@Controller('propostas')
export class ProposalController {

    constructor(private proposalService: ProposalService) {}

    @Get()
    getAll() {
        return this.proposalService.getAll();
    }

    @Post()
    create(@Body() proposal: Proposal): Proposal {
        return this.proposalService.create(proposal);
    }
}
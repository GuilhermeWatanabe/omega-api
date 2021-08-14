import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";
import { ProposalService } from "src/service/proposal.service";
import { Proposal } from "src/model/proposal.model";

@Controller('proposal')
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

    @Delete(':public_id')
    delete(@Param() params) {
        return this.proposalService.delete(params.public_id);
    }
}
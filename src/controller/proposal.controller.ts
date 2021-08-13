import { Controller, Get, Post, Body } from "@nestjs/common";
import { ProposalService } from "src/service/proposal.service";
import { Proposal } from "src/model/proposal.model";

@Controller('propostas')
export class ProposalController {

    constructor(private ProposalService: ProposalService) {}

    @Get()
    teste() {
        return 'kfdlkv';
    }

    @Post()
    create(@Body() proposal: Proposal) {
        
    }
}
import { Injectable } from "@nestjs/common";
import { Proposal } from "src/model/proposal.model";

@Injectable()
export class ProposalService {

    private proposals: Array<Proposal> = [];

    getAll(): Array<Proposal>  {
        return this.proposals;
    }

    create(proposal: Proposal): Proposal {
        proposal.public_id = 'qualquer id publico';
        proposal.hired = false;
        proposal.proposal_value = this.calculateValue();

        
        this.proposals.push(proposal);
        //this.repository.save(proposal);


        return proposal;
    }

    private calculateValue(): number {
        //Formula para cálculo do valor da proposta: (carga * valor do kW) + sub-mercado + fonte.

        return 100;
    }
}
import { Proposal } from 'src/proposals/entities/proposal.entity';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Load {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  company_name: string;

  @Column()
  consumption_kwh: string;

  @ManyToOne(() => Proposal, (proposal) => proposal.public_id)
  proposal: Proposal;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EnergySource } from '../dto/energySource.enum';
import { Submarket } from '../dto/submarket.enum';

@Entity()
export class Proposal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public_id: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column('int')
  energy_source: Submarket;

  @Column('int')
  submarket: EnergySource;

  @Column({ default: false })
  hired: boolean;

  @Column()
  proposal_value: number;
}

import { Load } from '../../load/entities/load.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
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

  @OneToMany(() => Load, (load) => load.proposal, {
    cascade: ['insert', 'remove'],
    eager: true,
  })
  loads: Load[];

  @Column()
  total_consumption: string;

  @Column({
    type: 'enum',
    enum: ['CONVENCIONAL', 'RENOVAVEL'],
    default: 'CONVENCIONAL',
  })
  energy_source: EnergySource;

  @Column({
    type: 'enum',
    enum: ['NORTE', 'NORDESTE', 'SUL', 'SULDESTE'],
    default: 'SUL',
  })
  submarket: Submarket;

  @Column({ default: false })
  hired: boolean;

  @Column()
  proposal_value: string;
}

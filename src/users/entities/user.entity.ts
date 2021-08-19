import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import { hashSync } from 'bcrypt';
import { Proposal } from 'src/proposals/entities/proposal.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public_id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 8);
  }

  @OneToMany(() => Proposal, (proposal) => proposal.user)
  proposals: Proposal[];
}

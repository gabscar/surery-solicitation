import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class SurgerySolicitation implements SurgerySolicitationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  code: string;

  @Column('text')
  room: string;

  @Column('text')
  procedures: string;

  @Column('text')
  doctor: string;

  @Column('text')
  hospital: string;

  @Column('text')
  patient: string;

  @Column('date')
  surgery_date: Date;

  @Column('text')
  general_observations: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

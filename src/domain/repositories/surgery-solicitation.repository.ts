import { SurgerySolicitationEntity } from '../entities/surgery-solicitation.entity';
import { IPaginationOutput } from '../interfaces/common/pagination.interface';
import { ICreateSurgerySolicitationInput } from '../interfaces/surgery-solicitation/create.interface';
import { IFindBySurgerySolicitationInput } from '../interfaces/surgery-solicitation/findBy.interface';
import {
  IUpdateSurgerySolicitationInput,
  IWhereUpdateSurgerySolicitationInput,
} from '../interfaces/surgery-solicitation/update.interface';
import { IFindAllSurgerySolicitationEntityServiceInput } from '../services/entities/surgery-solicitation/findAll.service';

export interface ISurgerySolicitationRepositoryDatabase {
  create(
    params: ICreateSurgerySolicitationInput,
  ): Promise<SurgerySolicitationEntity>;
  delete(id: string): Promise<void>;
  findAll(
    params: IFindAllSurgerySolicitationEntityServiceInput,
  ): Promise<IPaginationOutput<SurgerySolicitationEntity>>;
  findBy(
    params: IFindBySurgerySolicitationInput,
  ): Promise<SurgerySolicitationEntity>;
  update(
    where: IWhereUpdateSurgerySolicitationInput,
    params: IUpdateSurgerySolicitationInput,
  ): Promise<SurgerySolicitationEntity>;
}

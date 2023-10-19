import { IFindAllSurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/findAll.interface';
import { IBaseUseCase } from '../base.usecase';
import { IPaginationOutput } from 'src/domain/interfaces/common/pagination.interface';
import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';

export type IFindAllSurgerySolicitationUseCase = IBaseUseCase<
  [IFindAllSurgerySolicitationInput],
  IPaginationOutput<SurgerySolicitationEntity>
>;

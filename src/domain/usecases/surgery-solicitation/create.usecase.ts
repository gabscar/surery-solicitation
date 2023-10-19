import { SurgerySolicitationEntity } from '../../entities/surgery-solicitation.entity';
import { ICreateSurgerySolicitationInput } from '../../interfaces/surgery-solicitation/create.interface';
import { IBaseUseCase } from '../base.usecase';

export type ICreateSurgerySolicitationUseCase = IBaseUseCase<
  [ICreateSurgerySolicitationInput],
  SurgerySolicitationEntity
>;

import { IFindBySurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/findBy.interface';
import { SurgerySolicitationEntity } from '../../entities/surgery-solicitation.entity';
import { IBaseUseCase } from '../base.usecase';

export type IFindBySurgerySolicitationUseCase = IBaseUseCase<
  [IFindBySurgerySolicitationInput],
  SurgerySolicitationEntity
>;

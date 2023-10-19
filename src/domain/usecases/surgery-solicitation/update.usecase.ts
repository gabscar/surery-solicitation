import { IUpdateSurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/update.interface';
import { SurgerySolicitationEntity } from '../../entities/surgery-solicitation.entity';
import { IBaseUseCase } from '../base.usecase';

export type IUpdateSurgerySolicitationUseCase = IBaseUseCase<
  [string, IUpdateSurgerySolicitationInput],
  SurgerySolicitationEntity
>;

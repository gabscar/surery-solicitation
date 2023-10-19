import { Either } from 'src/domain/interfaces/common/either';
import { IBaseService } from '../../base.service';
import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';
import { ApiException } from 'src/app/exceptions/api.exception';
import {
  IUpdateSurgerySolicitationInput,
  IWhereUpdateSurgerySolicitationInput,
} from 'src/domain/interfaces/surgery-solicitation/update.interface';

export type IUpdateSurgerySolicitationEntityServiceInput = {
  where: IWhereUpdateSurgerySolicitationInput;
  params: IUpdateSurgerySolicitationInput;
};
export type IUpdateSurgerySolicitationEntityServiceOutput = Either<
  ApiException,
  SurgerySolicitationEntity
>;

export type IUpdateSurgerySolicitationEntityService = IBaseService<
  IUpdateSurgerySolicitationEntityServiceInput,
  IUpdateSurgerySolicitationEntityServiceOutput
>;

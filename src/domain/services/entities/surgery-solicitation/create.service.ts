import { IBaseService } from '../../base.service';
import { ApiException } from 'src/app/exceptions/api.exception';
import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';
import { Either } from 'src/domain/interfaces/common/either';
import { ICreateSurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/create.interface';

export type ICreateSurgerySolicitationEntityServiceInput =
  ICreateSurgerySolicitationInput;
export type ICreateSurgerySolicitationEntityServiceOutput = Either<
  ApiException,
  SurgerySolicitationEntity
>;

export type ICreateSurgerySolicitationEntityService = IBaseService<
  ICreateSurgerySolicitationInput,
  ICreateSurgerySolicitationEntityServiceOutput
>;

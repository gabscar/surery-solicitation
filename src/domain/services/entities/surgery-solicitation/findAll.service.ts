import { Either } from 'src/domain/interfaces/common/either';
import { IBaseService } from '../../base.service';
import {
  IPaginationInput,
  IPaginationOutput,
} from 'src/domain/interfaces/common/pagination.interface';
import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';
import { ApiException } from 'src/app/exceptions/api.exception';

export type IFindAllSurgerySolicitationEntityServiceInput = {
  code?: string;
  pagination: IPaginationInput;
};
export type IFindAllSurgerySolicitationEntityServiceOutput = Either<
  ApiException,
  IPaginationOutput<SurgerySolicitationEntity>
>;

export type IFindAllSurgerySolicitationEntityService = IBaseService<
  IFindAllSurgerySolicitationEntityServiceInput,
  IFindAllSurgerySolicitationEntityServiceOutput
>;

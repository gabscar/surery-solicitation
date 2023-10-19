import { ApiException } from 'src/app/exceptions/api.exception';
import { IBaseService } from '../../base.service';
import { Either } from 'src/domain/interfaces/common/either';

export type IDeleteSurgerySolicitationEntityServiceOutput = Either<
  ApiException,
  void
>;

export type IDeleteSurgerySolicitationEntityService = IBaseService<
  string,
  IDeleteSurgerySolicitationEntityServiceOutput
>;

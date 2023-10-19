import { Either } from 'src/domain/interfaces/common/either';
import { IBaseService } from '../../base.service';
import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';
import { ApiException } from 'src/app/exceptions/api.exception';

export type IFindBySurgerySolicitationEntityServiceInput = {
  value: string;
  field: keyof Pick<SurgerySolicitationEntity, 'id' | 'code'>;
};
export type IFindBySurgerySolicitationEntityServiceOutput = Either<
  ApiException,
  SurgerySolicitationEntity
>;

export type IFindBySurgerySolicitationEntityService = IBaseService<
  IFindBySurgerySolicitationEntityServiceInput,
  IFindBySurgerySolicitationEntityServiceOutput
>;

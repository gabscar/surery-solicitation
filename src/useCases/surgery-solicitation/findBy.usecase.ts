import { Inject } from '@nestjs/common';
import { INJECTION_SERVICE_FIND_BY_SURGERY_SOLICITATION } from 'src/domain/constants/injections/surgery-solicitation.constant';
import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';
import { IFindBySurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/findBy.interface';
import { IFindBySurgerySolicitationEntityService } from 'src/domain/services/entities/surgery-solicitation/findby.service';
import { IFindBySurgerySolicitationUseCase } from 'src/domain/usecases/surgery-solicitation/findBy.usecase';

export class FindBySurgerySolicitationUseCase
  implements IFindBySurgerySolicitationUseCase
{
  constructor(
    @Inject(INJECTION_SERVICE_FIND_BY_SURGERY_SOLICITATION)
    private readonly findByUserEntityService: IFindBySurgerySolicitationEntityService,
  ) {}

  async execute(
    params: IFindBySurgerySolicitationInput,
  ): Promise<SurgerySolicitationEntity> {
    const user = await this.findByUserEntityService.execute(params);

    if (user.isLeft()) {
      throw user.value;
    }

    return user.value;
  }
}

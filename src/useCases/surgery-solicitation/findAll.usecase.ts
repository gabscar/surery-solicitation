import { Inject } from '@nestjs/common';
import { INJECTION_SERVICE_FIND_ALL_SURGERY_SOLICITATION } from 'src/domain/constants/injections/surgery-solicitation.constant';
import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';
import { IPaginationOutput } from 'src/domain/interfaces/common/pagination.interface';
import { IFindAllSurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/findAll.interface';
import { IFindAllSurgerySolicitationEntityService } from 'src/domain/services/entities/surgery-solicitation/findAll.service';
import { IFindAllSurgerySolicitationUseCase } from 'src/domain/usecases/surgery-solicitation/findAll.usecase';

export class FindAllSurgerySolicitationUseCase
  implements IFindAllSurgerySolicitationUseCase
{
  constructor(
    @Inject(INJECTION_SERVICE_FIND_ALL_SURGERY_SOLICITATION)
    private readonly findAllUserEntityService: IFindAllSurgerySolicitationEntityService,
  ) {}

  async execute(
    params: IFindAllSurgerySolicitationInput,
  ): Promise<IPaginationOutput<SurgerySolicitationEntity>> {
    const surgerySolicitation = await this.findAllUserEntityService.execute({
      code: params.code,
      pagination: {
        page: params.page,
        take: params.take,
      },
    });

    if (surgerySolicitation.isLeft()) {
      throw surgerySolicitation.value;
    }

    return surgerySolicitation.value;
  }
}

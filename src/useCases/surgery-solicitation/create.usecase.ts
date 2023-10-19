import { Inject } from '@nestjs/common';
import {
  INJECTION_SERVICE_CREATE_SURGERY_SOLICITATION,
  INJECTION_SERVICE_FIND_BY_SURGERY_SOLICITATION,
} from 'src/domain/constants/injections/surgery-solicitation.constant';
import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';
import { SurgerySolicitationErrors } from 'src/domain/errors/surgery-solicitation.error';
import { ICreateSurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/create.interface';
import { ICreateSurgerySolicitationEntityService } from 'src/domain/services/entities/surgery-solicitation/create.service';
import { IFindBySurgerySolicitationEntityService } from 'src/domain/services/entities/surgery-solicitation/findby.service';
import { ICreateSurgerySolicitationUseCase } from 'src/domain/usecases/surgery-solicitation/create.usecase';

export class CreateSurgerySolicitationUseCase
  implements ICreateSurgerySolicitationUseCase
{
  constructor(
    @Inject(INJECTION_SERVICE_FIND_BY_SURGERY_SOLICITATION)
    private readonly findByUserEntityService: IFindBySurgerySolicitationEntityService,
    @Inject(INJECTION_SERVICE_CREATE_SURGERY_SOLICITATION)
    private readonly createUserEntityService: ICreateSurgerySolicitationEntityService,
  ) {}

  async execute(
    params: ICreateSurgerySolicitationInput,
  ): Promise<SurgerySolicitationEntity> {
    const surgerySolicitationExists =
      await this.findByUserEntityService.execute({
        field: 'code',
        value: params.code,
      });

    if (surgerySolicitationExists.isRight()) {
      throw SurgerySolicitationErrors.alreadyExists();
    }

    const surgery = await this.createUserEntityService.execute(params);

    if (surgery.isLeft()) {
      throw surgery.value;
    }

    return surgery.value;
  }
}

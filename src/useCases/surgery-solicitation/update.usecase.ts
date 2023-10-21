import { Inject } from '@nestjs/common';
import {
  INJECTION_SERVICE_FIND_BY_SURGERY_SOLICITATION,
  INJECTION_SERVICE_UPDATE_SURGERY_SOLICITATION,
} from 'src/domain/constants/injections/surgery-solicitation.constant';
import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';
import { SurgerySolicitationErrors } from 'src/domain/errors/surgery-solicitation.error';
import { IUpdateSurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/update.interface';
import { IFindBySurgerySolicitationEntityService } from 'src/domain/services/entities/surgery-solicitation/findby.service';
import { IUpdateSurgerySolicitationEntityService } from 'src/domain/services/entities/surgery-solicitation/update.service';
import { IUpdateSurgerySolicitationUseCase } from 'src/domain/usecases/surgery-solicitation/update.usecase';

export class UpdateSurgerySolicitationUseCase
  implements IUpdateSurgerySolicitationUseCase
{
  constructor(
    @Inject(INJECTION_SERVICE_FIND_BY_SURGERY_SOLICITATION)
    private readonly findByUserEntityService: IFindBySurgerySolicitationEntityService,
    @Inject(INJECTION_SERVICE_UPDATE_SURGERY_SOLICITATION)
    private readonly updateUserEntityService: IUpdateSurgerySolicitationEntityService,
  ) {}

  async execute(
    id: string,
    params: IUpdateSurgerySolicitationInput,
  ): Promise<SurgerySolicitationEntity> {
    await this.validate(id, params);

    const user = await this.updateUserEntityService.execute({
      where: { id: id },
      params: {
        ...params,
        surgery_date: params.surgery_date
          ? new Date(params.surgery_date)
          : undefined,
      },
    });

    if (user.isLeft()) {
      throw user.value;
    }

    return user.value;
  }

  private async validate(
    id: string,
    params: IUpdateSurgerySolicitationInput,
  ): Promise<void> {
    await this.validateId(id);
    if (params.code) await this.validateCode(id, params.code);
  }

  private async validateId(id: string) {
    const userExists = await this.findByUserEntityService.execute({
      field: 'id',
      value: id,
    });

    if (userExists.isLeft()) {
      throw userExists.value;
    }
  }

  private async validateCode(id: string, code: string): Promise<void> {
    if (!code) return;

    const codeExists = await this.findByUserEntityService.execute({
      field: 'code',
      value: code,
    });

    if (codeExists.isRight() && codeExists.value.id !== id) {
      throw SurgerySolicitationErrors.alreadyExists();
    }
  }
}

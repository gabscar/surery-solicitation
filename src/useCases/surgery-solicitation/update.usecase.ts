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
      params,
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
    await this.validateCode(id, params.code);
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

  private async validateCode(id: string, email: string): Promise<void> {
    if (!email) return;

    const emailExists = await this.findByUserEntityService.execute({
      field: 'code',
      value: id,
    });

    if (emailExists.isRight()) {
      throw SurgerySolicitationErrors.alreadyExists();
    }
  }
}

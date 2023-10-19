import { Inject } from '@nestjs/common';
import {
  INJECTION_SERVICE_DELETE_SURGERY_SOLICITATION,
  INJECTION_SERVICE_FIND_BY_SURGERY_SOLICITATION,
} from 'src/domain/constants/injections/surgery-solicitation.constant';
import { IDeleteSurgerySolicitationEntityService } from 'src/domain/services/entities/surgery-solicitation/delete.service';
import { IFindBySurgerySolicitationEntityService } from 'src/domain/services/entities/surgery-solicitation/findby.service';
import { IDeleteSurgerySolicitationUseCase } from 'src/domain/usecases/surgery-solicitation/delete.usecase';

export class DeleteSurgerySolicitationUseCase
  implements IDeleteSurgerySolicitationUseCase
{
  constructor(
    @Inject(INJECTION_SERVICE_FIND_BY_SURGERY_SOLICITATION)
    private readonly findBySurgerySolicitationEntityService: IFindBySurgerySolicitationEntityService,
    @Inject(INJECTION_SERVICE_DELETE_SURGERY_SOLICITATION)
    private readonly deleteSurgerySolicitationEntityService: IDeleteSurgerySolicitationEntityService,
  ) {}

  async execute(id: string): Promise<void> {
    const surgeryExists =
      await this.findBySurgerySolicitationEntityService.execute({
        field: 'id',
        value: id,
      });

    if (surgeryExists.isLeft()) {
      throw surgeryExists.value;
    }

    const response = await this.deleteSurgerySolicitationEntityService.execute(
      id,
    );

    if (response.isLeft()) {
      throw response.value;
    }
  }
}

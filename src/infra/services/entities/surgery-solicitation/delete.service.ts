import { Inject } from '@nestjs/common';
import { INJECTION_REPOSITORY_SURGERY_SOLICITATION } from 'src/domain/constants/injections/surgery-solicitation.constant';
import { SurgerySolicitationErrors } from 'src/domain/errors/surgery-solicitation.error';
import { left, right } from 'src/domain/interfaces/common/either';
import { ISurgerySolicitationRepositoryDatabase } from 'src/domain/repositories/surgery-solicitation.repository';
import {
  IDeleteSurgerySolicitationEntityService,
  IDeleteSurgerySolicitationEntityServiceOutput,
} from 'src/domain/services/entities/surgery-solicitation/delete.service';

export class DeleteSurgerySolicitationEntityService
  implements IDeleteSurgerySolicitationEntityService
{
  constructor(
    @Inject(INJECTION_REPOSITORY_SURGERY_SOLICITATION)
    private readonly surgerySolicitationRepository: ISurgerySolicitationRepositoryDatabase,
  ) {}

  async execute(
    id: string,
  ): Promise<IDeleteSurgerySolicitationEntityServiceOutput> {
    try {
      await this.surgerySolicitationRepository.delete(id);

      return right(null);
    } catch (err) {
      console.log(err);
      return left(SurgerySolicitationErrors.deleteEntity());
    }
  }
}

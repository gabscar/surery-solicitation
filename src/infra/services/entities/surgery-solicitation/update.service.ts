import { Inject } from '@nestjs/common';
import { INJECTION_REPOSITORY_SURGERY_SOLICITATION } from 'src/domain/constants/injections/surgery-solicitation.constant';
import { SurgerySolicitationErrors } from 'src/domain/errors/surgery-solicitation.error';
import { left, right } from 'src/domain/interfaces/common/either';
import { ISurgerySolicitationRepositoryDatabase } from 'src/domain/repositories/surgery-solicitation.repository';
import {
  IUpdateSurgerySolicitationEntityService,
  IUpdateSurgerySolicitationEntityServiceInput,
  IUpdateSurgerySolicitationEntityServiceOutput,
} from 'src/domain/services/entities/surgery-solicitation/update.service';

export class UpdateSurgerySolicitationEntityService
  implements IUpdateSurgerySolicitationEntityService
{
  constructor(
    @Inject(INJECTION_REPOSITORY_SURGERY_SOLICITATION)
    private readonly userRepository: ISurgerySolicitationRepositoryDatabase,
  ) {}

  async execute({
    where,
    params,
  }: IUpdateSurgerySolicitationEntityServiceInput): Promise<IUpdateSurgerySolicitationEntityServiceOutput> {
    try {
      const surgerySolicitation = await this.userRepository.update(
        where,
        params,
      );

      return right(surgerySolicitation);
    } catch (err) {
      console.log(err);
      return left(SurgerySolicitationErrors.updateEntity());
    }
  }
}

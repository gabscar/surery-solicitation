import { Inject } from '@nestjs/common';
import { INJECTION_REPOSITORY_SURGERY_SOLICITATION } from 'src/domain/constants/injections/surgery-solicitation.constant';
import { SurgerySolicitationErrors } from 'src/domain/errors/surgery-solicitation.error';
import { left, right } from 'src/domain/interfaces/common/either';
import { ISurgerySolicitationRepositoryDatabase } from 'src/domain/repositories/surgery-solicitation.repository';
import {
  IFindBySurgerySolicitationEntityService,
  IFindBySurgerySolicitationEntityServiceInput,
  IFindBySurgerySolicitationEntityServiceOutput,
} from 'src/domain/services/entities/surgery-solicitation/findby.service';

export class FindBySurgerySolicitationEntityService
  implements IFindBySurgerySolicitationEntityService
{
  constructor(
    @Inject(INJECTION_REPOSITORY_SURGERY_SOLICITATION)
    private readonly userRepository: ISurgerySolicitationRepositoryDatabase,
  ) {}

  async execute(
    params: IFindBySurgerySolicitationEntityServiceInput,
  ): Promise<IFindBySurgerySolicitationEntityServiceOutput> {
    try {
      const surgerySolicitation = await this.userRepository.findBy(params);

      if (!surgerySolicitation) {
        return left(SurgerySolicitationErrors.notFound());
      }

      return right(surgerySolicitation);
    } catch (err) {
      console.log(err);
      return left(SurgerySolicitationErrors.readEntity());
    }
  }
}

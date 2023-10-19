import { Inject } from '@nestjs/common';
import { INJECTION_REPOSITORY_SURGERY_SOLICITATION } from 'src/domain/constants/injections/surgery-solicitation.constant';
import { SurgerySolicitationErrors } from 'src/domain/errors/surgery-solicitation.error';
import { left, right } from 'src/domain/interfaces/common/either';
import { ISurgerySolicitationRepositoryDatabase } from 'src/domain/repositories/surgery-solicitation.repository';
import {
  IFindAllSurgerySolicitationEntityService,
  IFindAllSurgerySolicitationEntityServiceInput,
  IFindAllSurgerySolicitationEntityServiceOutput,
} from 'src/domain/services/entities/surgery-solicitation/findAll.service';

export class FindAllSurgerySolicitationEntityService
  implements IFindAllSurgerySolicitationEntityService
{
  constructor(
    @Inject(INJECTION_REPOSITORY_SURGERY_SOLICITATION)
    private readonly userRepository: ISurgerySolicitationRepositoryDatabase,
  ) {}

  async execute(
    params: IFindAllSurgerySolicitationEntityServiceInput,
  ): Promise<IFindAllSurgerySolicitationEntityServiceOutput> {
    try {
      const surgerySolicitationList = await this.userRepository.findAll(params);
      return right(surgerySolicitationList);
    } catch (err) {
      console.log(err);
      return left(SurgerySolicitationErrors.list());
    }
  }
}

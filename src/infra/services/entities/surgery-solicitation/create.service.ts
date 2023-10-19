import { Inject } from '@nestjs/common';
import { INJECTION_REPOSITORY_SURGERY_SOLICITATION } from 'src/domain/constants/injections/surgery-solicitation.constant';
import { SurgerySolicitationErrors } from 'src/domain/errors/surgery-solicitation.error';
import { left, right } from 'src/domain/interfaces/common/either';
import { ISurgerySolicitationRepositoryDatabase } from 'src/domain/repositories/surgery-solicitation.repository';
import {
  ICreateSurgerySolicitationEntityService,
  ICreateSurgerySolicitationEntityServiceInput,
  ICreateSurgerySolicitationEntityServiceOutput,
} from 'src/domain/services/entities/surgery-solicitation/create.service';

export class CreateSurgerySolicitationEntityService
  implements ICreateSurgerySolicitationEntityService
{
  constructor(
    @Inject(INJECTION_REPOSITORY_SURGERY_SOLICITATION)
    private readonly userRepository: ISurgerySolicitationRepositoryDatabase,
  ) {}

  async execute(
    params: ICreateSurgerySolicitationEntityServiceInput,
  ): Promise<ICreateSurgerySolicitationEntityServiceOutput> {
    try {
      const surgerySolicitation = await this.userRepository.create(params);

      return right(surgerySolicitation);
    } catch (err) {
      console.log(err);
      return left(SurgerySolicitationErrors.createEntity());
    }
  }
}

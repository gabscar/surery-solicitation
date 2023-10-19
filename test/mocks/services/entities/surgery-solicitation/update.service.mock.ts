import { right } from 'src/domain/interfaces/common/either';
import { ISurgerySolicitationRepositoryDatabase } from 'src/domain/repositories/surgery-solicitation.repository';
import {
  IUpdateSurgerySolicitationEntityService,
  IUpdateSurgerySolicitationEntityServiceInput,
  IUpdateSurgerySolicitationEntityServiceOutput,
} from 'src/domain/services/entities/surgery-solicitation/update.service';

export class UpdateSurgerySolicitationEntityServiceMock
  implements IUpdateSurgerySolicitationEntityService
{
  constructor(
    private readonly userRepository: ISurgerySolicitationRepositoryDatabase,
  ) {}

  async execute({
    where,
    params,
  }: IUpdateSurgerySolicitationEntityServiceInput): Promise<IUpdateSurgerySolicitationEntityServiceOutput> {
    const user = await this.userRepository.update(where, params);
    return right(user);
  }

  static getSpies(service: UpdateSurgerySolicitationEntityServiceMock) {
    return {
      executeSpy: jest.spyOn(service, 'execute'),
    };
  }
}

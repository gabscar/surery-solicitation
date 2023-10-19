import { right } from 'src/domain/interfaces/common/either';
import { ISurgerySolicitationRepositoryDatabase } from 'src/domain/repositories/surgery-solicitation.repository';
import {
  IFindBySurgerySolicitationEntityService,
  IFindBySurgerySolicitationEntityServiceInput,
  IFindBySurgerySolicitationEntityServiceOutput,
} from 'src/domain/services/entities/surgery-solicitation/findby.service';

export class FindBySurgerySolicitationEntityServiceMock
  implements IFindBySurgerySolicitationEntityService
{
  constructor(
    private readonly userRepository: ISurgerySolicitationRepositoryDatabase,
  ) {}

  async execute(
    params: IFindBySurgerySolicitationEntityServiceInput,
  ): Promise<IFindBySurgerySolicitationEntityServiceOutput> {
    const user = await this.userRepository.findBy(params);
    return right(user);
  }

  static getSpies(service: FindBySurgerySolicitationEntityServiceMock) {
    return {
      executeSpy: jest.spyOn(service, 'execute'),
    };
  }
}

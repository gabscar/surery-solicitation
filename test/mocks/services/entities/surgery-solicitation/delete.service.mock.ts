import { right } from 'src/domain/interfaces/common/either';
import { ISurgerySolicitationRepositoryDatabase } from 'src/domain/repositories/surgery-solicitation.repository';
import {
  IDeleteSurgerySolicitationEntityService,
  IDeleteSurgerySolicitationEntityServiceOutput,
} from 'src/domain/services/entities/surgery-solicitation/delete.service';

export class DeleteSurgerySolicitationEntityServiceMock
  implements IDeleteSurgerySolicitationEntityService
{
  constructor(
    private readonly userRepository: ISurgerySolicitationRepositoryDatabase,
  ) {}

  async execute(
    id: string,
  ): Promise<IDeleteSurgerySolicitationEntityServiceOutput> {
    await this.userRepository.delete(id);

    return right(null);
  }
  static getSpies(service: DeleteSurgerySolicitationEntityServiceMock) {
    return {
      executeSpy: jest.spyOn(service, 'execute'),
    };
  }
}

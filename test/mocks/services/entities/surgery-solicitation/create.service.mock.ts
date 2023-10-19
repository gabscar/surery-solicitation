import { right } from 'src/domain/interfaces/common/either';
import { ICreateSurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/create.interface';
import { ISurgerySolicitationRepositoryDatabase } from 'src/domain/repositories/surgery-solicitation.repository';
import {
  ICreateSurgerySolicitationEntityService,
  ICreateSurgerySolicitationEntityServiceOutput,
} from 'src/domain/services/entities/surgery-solicitation/create.service';

export class CreateSurgerySolicitationEntityServiceMock
  implements ICreateSurgerySolicitationEntityService
{
  constructor(
    private readonly userRepository: ISurgerySolicitationRepositoryDatabase,
  ) {}

  async execute(
    params: ICreateSurgerySolicitationInput,
  ): Promise<ICreateSurgerySolicitationEntityServiceOutput> {
    const user = await this.userRepository.create(params);
    return right(user);
  }

  static getSpies(service: CreateSurgerySolicitationEntityServiceMock) {
    return {
      executeSpy: jest.spyOn(service, 'execute'),
    };
  }
}

import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';
import { ICreateSurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/create.interface';
import { ISurgerySolicitationRepositoryDatabase } from 'src/domain/repositories/surgery-solicitation.repository';
import { SurgeryEntityMock } from '../entities/surgery-solicitation.entity.mock';
import { IFindAllSurgerySolicitationEntityServiceInput } from 'src/domain/services/entities/surgery-solicitation/findAll.service';
import { IPaginationOutput } from 'src/domain/interfaces/common/pagination.interface';
import { IFindBySurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/findBy.interface';
import { IWhereUpdateSurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/update.interface';

export class SurgerySolicitationRepositoryMock
  implements ISurgerySolicitationRepositoryDatabase
{
  create(
    params: ICreateSurgerySolicitationInput,
  ): Promise<SurgerySolicitationEntity> {
    return Promise.resolve(SurgeryEntityMock.create(params));
  }

  delete(_id: string): Promise<void> {
    return Promise.resolve();
  }

  findAll(
    params: IFindAllSurgerySolicitationEntityServiceInput,
  ): Promise<IPaginationOutput<SurgerySolicitationEntity>> {
    const users = [SurgeryEntityMock.create()];
    return Promise.resolve({
      data: users,
      meta: {
        taken: users.length,
        page: params?.pagination.page || 1,
        max: users.length,
      },
    });
  }

  findBy(
    params: IFindBySurgerySolicitationInput,
  ): Promise<SurgerySolicitationEntity> {
    return Promise.resolve(
      SurgeryEntityMock.create({ [params.field]: params.value }),
    );
  }

  update(
    where: IWhereUpdateSurgerySolicitationInput,
    params: Partial<ICreateSurgerySolicitationInput>,
  ): Promise<SurgerySolicitationEntity> {
    return Promise.resolve(
      SurgeryEntityMock.create({ id: String(where.id), ...params }),
    );
  }

  static getSpies(repository: SurgerySolicitationRepositoryMock) {
    return {
      createSpy: jest.spyOn(repository, 'create'),
      deleteSpy: jest.spyOn(repository, 'delete'),
      findAllSpy: jest.spyOn(repository, 'findAll'),
      findBySpy: jest.spyOn(repository, 'findBy'),
      updateSpy: jest.spyOn(repository, 'update'),
    };
  }
}

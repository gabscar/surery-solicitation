import { instantiateAndGetSpies } from 'test/utils/common.utils';
import { FindBySurgerySolicitationEntityServiceMock } from '../services/entities/surgery-solicitation/findBy.service.mock';
import { UpdateSurgerySolicitationEntityServiceMock } from '../services/entities/surgery-solicitation/update.service.mock';
import { DeleteSurgerySolicitationEntityServiceMock } from '../services/entities/surgery-solicitation/delete.service.mock';
import { CreateSurgerySolicitationEntityServiceMock } from '../services/entities/surgery-solicitation/create.service.mock';
import { SurgerySolicitationRepositoryMock } from '../repositories/surgery-solicitation.repository.mock';
import { SurgeryEntityMock } from '../entities/surgery-solicitation.entity.mock';
import { FindBySurgerySolicitationUseCase } from 'src/useCases/surgery-solicitation/findBy.usecase';
import { UpdateSurgerySolicitationUseCase } from 'src/useCases/surgery-solicitation/update.usecase';
import { DeleteSurgerySolicitationUseCase } from 'src/useCases/surgery-solicitation/delete.usecase';
import { CreateSurgerySolicitationUseCase } from 'src/useCases/surgery-solicitation/create.usecase';

export function createSurgerySolicitationsMocks() {
  const entity = SurgeryEntityMock;

  const repository = instantiateAndGetSpies(SurgerySolicitationRepositoryMock);

  const services = {
    findBySurgerySolicitationEntityService: instantiateAndGetSpies(
      FindBySurgerySolicitationEntityServiceMock,
      repository.instance,
    ),
    updateSurgerySolicitationEntityService: instantiateAndGetSpies(
      UpdateSurgerySolicitationEntityServiceMock,
      repository.instance,
    ),
    deleteSurgerySolicitationEntityService: instantiateAndGetSpies(
      DeleteSurgerySolicitationEntityServiceMock,
      repository.instance,
    ),
    createSurgerySolicitationEntityService: instantiateAndGetSpies(
      CreateSurgerySolicitationEntityServiceMock,
      repository.instance,
    ),
  };

  const useCases = {
    findBySurgerySolicitationUseCase: new FindBySurgerySolicitationUseCase(
      services.findBySurgerySolicitationEntityService.instance,
    ),
    updateSurgerySolicitationUseCase: new UpdateSurgerySolicitationUseCase(
      services.findBySurgerySolicitationEntityService.instance,
      services.updateSurgerySolicitationEntityService.instance,
    ),
    deleteSurgerySolicitationUseCase: new DeleteSurgerySolicitationUseCase(
      services.findBySurgerySolicitationEntityService.instance,
      services.deleteSurgerySolicitationEntityService.instance,
    ),
    createSurgerySolicitationUseCase: new CreateSurgerySolicitationUseCase(
      services.findBySurgerySolicitationEntityService.instance,
      services.createSurgerySolicitationEntityService.instance,
    ),
  };

  return {
    entity,
    repository,
    services,
    useCases,
  };
}

export type ICreateSurgerySolicitationMocks = ReturnType<
  typeof createSurgerySolicitationsMocks
>;

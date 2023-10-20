import { SurgerySolicitationErrors } from 'src/domain/errors/surgery-solicitation.error';
import { left, right } from 'src/domain/interfaces/common/either';
import { FindBySurgerySolicitationUseCase } from 'src/useCases/surgery-solicitation/findBy.usecase';
import { SurgeryEntityMock } from 'test/mocks/entities/surgery-solicitation.entity.mock';
import {
  ICreateSurgerySolicitationMocks,
  createSurgerySolicitationsMocks,
} from 'test/mocks/factories/surgery-solicitation.factory.mock';

describe('find user use case -  when FindSurgerySolicitationUseCase is executed', () => {
  let usedMocks: ICreateSurgerySolicitationMocks;
  let sut: FindBySurgerySolicitationUseCase;
  function initMocks() {
    usedMocks = createSurgerySolicitationsMocks();
  }
  function initSut() {
    sut = usedMocks.useCases.findBySurgerySolicitationUseCase;
  }
  function initSetUpMocks() {
    const { spies } = usedMocks.services.findBySurgerySolicitationEntityService;
    spies.executeSpy.mockResolvedValue(right(SurgeryEntityMock.create()));
  }

  beforeEach(() => {
    initMocks();
    initSut();
    initSetUpMocks();
  });

  test('it should call the execute method from FindByUserEntityService with correct params', async () => {
    const { executeSpy } =
      usedMocks.services.findBySurgerySolicitationEntityService.spies;

    const result = await sut.execute({
      field: 'id',
      value: 'anyid',
    });

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(result.code).toBe('Any code');
  });
  test('it Should return error if user not founded', () => {
    const { spies } = usedMocks.services.findBySurgerySolicitationEntityService;
    spies.executeSpy.mockResolvedValueOnce(
      left(SurgerySolicitationErrors.notFound()),
    );

    const { executeSpy } =
      usedMocks.services.findBySurgerySolicitationEntityService.spies;

    const resultPromise = sut.execute({
      field: 'id',
      value: 'any id',
    });

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(resultPromise).rejects.toThrow(SurgerySolicitationErrors.notFound());
  });
});

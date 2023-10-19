import { SurgerySolicitationErrors } from 'src/domain/errors/surgery-solicitation.error';
import { left, right } from 'src/domain/interfaces/common/either';
import { UpdateSurgerySolicitationUseCase } from 'src/useCases/surgery-solicitation/update.usecase';
import { SurgeryEntityMock } from 'test/mocks/entities/surgery-solicitation.entity.mock';
import {
  ICreateSurgerySolicitationMocks,
  createSurgerySolicitationsMocks,
} from 'test/mocks/factories/surgery-solicitation.factory.mock';

describe('update user use case -  when UpdateUserUseCase is executed', () => {
  let usedMocks: ICreateSurgerySolicitationMocks;
  let sut: UpdateSurgerySolicitationUseCase;
  const surgerySolicitation = SurgeryEntityMock.create();
  function initMocks() {
    usedMocks = createSurgerySolicitationsMocks();
  }
  function initSut() {
    sut = usedMocks.useCases.updateSurgerySolicitationUseCase;
  }
  function initSetUpMocks() {
    const { spies } = usedMocks.services.findBySurgerySolicitationEntityService;
    spies.executeSpy.mockResolvedValue(right(surgerySolicitation));
  }

  beforeEach(() => {
    initMocks();
    initSut();
    initSetUpMocks();
  });
  function getPayload() {
    return {
      room: 'A02',
    };
  }
  test('it should call the execute method from UpdateUserEntityService with correct params', async () => {
    const { spies } = usedMocks.services.findBySurgerySolicitationEntityService;
    const { executeSpy } =
      usedMocks.services.findBySurgerySolicitationEntityService.spies;
    const payload = getPayload();
    const result = await sut.execute(surgerySolicitation.id, payload);

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(result.code).toBe('Any code');
  });
  test('it Should return error if user is not founded', () => {
    const { spies } = usedMocks.services.findBySurgerySolicitationEntityService;
    spies.executeSpy.mockResolvedValueOnce(
      left(SurgerySolicitationErrors.notFound()),
    );

    const { executeSpy } =
      usedMocks.services.findBySurgerySolicitationEntityService.spies;

    const resultPromise = sut.execute('fakeId', {
      code: 'code',
    });

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(resultPromise).rejects.toThrow(SurgerySolicitationErrors.notFound());
  });
  test('it Should return error if user email exists', () => {
    const { spies } = usedMocks.services.findBySurgerySolicitationEntityService;
    spies.executeSpy.mockResolvedValueOnce(right(surgerySolicitation));
    spies.executeSpy.mockResolvedValueOnce(right(surgerySolicitation));
    const { executeSpy } =
      usedMocks.services.findBySurgerySolicitationEntityService.spies;

    const resultPromise = sut.execute('fakeId', {
      code: 'code',
    });

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(resultPromise).rejects.toThrow(
      SurgerySolicitationErrors.alreadyExists(),
    );
  });
});

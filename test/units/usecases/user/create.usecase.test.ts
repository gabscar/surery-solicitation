import { SurgerySolicitationErrors } from 'src/domain/errors/surgery-solicitation.error';
import { left, right } from 'src/domain/interfaces/common/either';
import { CreateSurgerySolicitationUseCase } from 'src/useCases/surgery-solicitation/create.usecase';
import {
  ICreateSurgerySolicitationMocks,
  createSurgerySolicitationsMocks,
} from 'test/mocks/factories/surgery-solicitation.factory.mock';

describe('create user use case - when CreateUserUseCase is executed', () => {
  let userMocks: ICreateSurgerySolicitationMocks;
  let sut: CreateSurgerySolicitationUseCase;

  function initMocks() {
    userMocks = createSurgerySolicitationsMocks();
  }

  function initSut() {
    sut = userMocks.useCases.createSurgerySolicitationUseCase;
  }

  function initSetUpMocks() {
    const { spies } = userMocks.services.findBySurgerySolicitationEntityService;
    spies.executeSpy.mockResolvedValue(left(null));
  }

  beforeEach(() => {
    initMocks();
    initSut();
    initSetUpMocks();
  });

  function getPayload() {
    return {
      code: '0001',
      room: 'A01',
      procedures: 'any procedure',
      doctor: 'any doctor',
      hospital: 'any hospital',
      surgery_date: new Date(),
      general_observations: 'new observation',
      patient: 'new patient',
    };
  }

  test('it should call the execute method from FindByUserEntityService with correct params', async () => {
    const { executeSpy } =
      userMocks.services.findBySurgerySolicitationEntityService.spies;

    const payload = getPayload();

    await sut.execute(payload);

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(executeSpy).toHaveBeenCalledWith({
      field: 'code',
      value: payload.code,
    });
  });

  test('it should throw if the email sent is already in use', () => {
    const { executeSpy } =
      userMocks.services.findBySurgerySolicitationEntityService.spies;
    executeSpy.mockResolvedValue(right(userMocks.entity.create()));

    const payload = getPayload();
    payload.code = 'codeInUse';

    const promise = sut.execute(payload);

    return expect(promise).rejects.toThrowError(
      SurgerySolicitationErrors.alreadyExists(),
    );
  });

  test('it should call the execute method from CreateUserEntityService with correct params', async () => {
    const { executeSpy } =
      userMocks.services.createSurgerySolicitationEntityService.spies;

    const payload = getPayload();

    await sut.execute(payload);

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(executeSpy).toHaveBeenCalledWith(payload);
  });

  test('it should return the created user', async () => {
    const payload = getPayload();

    const user = userMocks.entity.create(payload);
    const { executeSpy } =
      userMocks.services.createSurgerySolicitationEntityService.spies;
    executeSpy.mockResolvedValueOnce(right(user));

    const result = await sut.execute(payload);

    expect(result?.id).toBeTruthy();
    expect(result.code).toBe(payload.code);
    expect(result.doctor).toBe(payload.doctor);
  });
});

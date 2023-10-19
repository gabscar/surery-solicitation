import { Controller, Get, Inject, Param } from '@nestjs/common';
import { SurgerySolicitationPresenter } from 'src/app/presenters/surgery-solicitation.presenter';
import { INJECTION_USECASE_FIND_BY_SURGERY_SOLICITATION } from 'src/domain/constants/injections/surgery-solicitation.constant';
import { IFindBySurgerySolicitationUseCase } from 'src/domain/usecases/surgery-solicitation/findBy.usecase';

@Controller('surgery-solicitation')
export class FindByIdSurgerySolicitationController {
  constructor(
    @Inject(INJECTION_USECASE_FIND_BY_SURGERY_SOLICITATION)
    private readonly findBySurgerySolicitationUseCase: IFindBySurgerySolicitationUseCase,
  ) {}

  @Get('/find/:id')
  async findByEmail(@Param('id') id: string) {
    const solicitation = await this.findBySurgerySolicitationUseCase.execute({
      field: 'id',
      value: id,
    });
    return new SurgerySolicitationPresenter().present(solicitation);
  }
}

import { Controller, Get, Inject, Query } from '@nestjs/common';
import { FindAllSurgerySolicitationDto } from 'src/app/dtos/surgery-solicitation/findAll.dto';
import { SurgerySolicitationPresenter } from 'src/app/presenters/surgery-solicitation.presenter';
import { INJECTION_USECASE_FIND_ALL_SURGERY_SOLICITATION } from 'src/domain/constants/injections/surgery-solicitation.constant';
import { IFindAllSurgerySolicitationUseCase } from 'src/domain/usecases/surgery-solicitation/findAll.usecase';

@Controller('surgery-solicitation')
export class FindAllSurgerySolicitationController {
  constructor(
    @Inject(INJECTION_USECASE_FIND_ALL_SURGERY_SOLICITATION)
    private readonly findAllSurgerySolicitationUseCase: IFindAllSurgerySolicitationUseCase,
  ) {}

  @Get('/find-all')
  async findAll(@Query() params: FindAllSurgerySolicitationDto) {
    const solicitationList =
      await this.findAllSurgerySolicitationUseCase.execute(params);
    return new SurgerySolicitationPresenter().list(solicitationList);
  }
}

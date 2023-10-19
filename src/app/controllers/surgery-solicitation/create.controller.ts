import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateSurgerySolicitationDto } from 'src/app/dtos/surgery-solicitation/create.dto';
import { SurgerySolicitationPresenter } from 'src/app/presenters/surgery-solicitation.presenter';
import { INJECTION_USECASE_CREATE_SURGERY_SOLICITATION } from 'src/domain/constants/injections/surgery-solicitation.constant';
import { ICreateSurgerySolicitationUseCase } from 'src/domain/usecases/surgery-solicitation/create.usecase';

@Controller('surgery-solicitation')
export class CreateSurgerySolicitationController {
  constructor(
    @Inject(INJECTION_USECASE_CREATE_SURGERY_SOLICITATION)
    private readonly createSurgerySolicitationUseCase: ICreateSurgerySolicitationUseCase,
  ) {}

  @Post()
  async create(@Body() params: CreateSurgerySolicitationDto) {
    const solicitation = await this.createSurgerySolicitationUseCase.execute(
      params,
    );
    return new SurgerySolicitationPresenter().present(solicitation);
  }
}

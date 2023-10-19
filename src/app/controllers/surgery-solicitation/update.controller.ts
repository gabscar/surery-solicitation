import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import { UpdateSurgerySolicitationDto } from 'src/app/dtos/surgery-solicitation/update.dto';
import { SurgerySolicitationPresenter } from 'src/app/presenters/surgery-solicitation.presenter';
import { INJECTION_USECASE_UPDATE_SURGERY_SOLICITATION } from 'src/domain/constants/injections/surgery-solicitation.constant';
import { IUpdateSurgerySolicitationUseCase } from 'src/domain/usecases/surgery-solicitation/update.usecase';

@Controller('surgery-solicitation')
export class UpdateSurgerySolicitationController {
  constructor(
    @Inject(INJECTION_USECASE_UPDATE_SURGERY_SOLICITATION)
    private readonly updateSurgerySolicitationUseCase: IUpdateSurgerySolicitationUseCase,
  ) {}

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() params: UpdateSurgerySolicitationDto,
  ) {
    const solicitation = await this.updateSurgerySolicitationUseCase.execute(
      id,
      params,
    );
    return new SurgerySolicitationPresenter().present(solicitation);
  }
}

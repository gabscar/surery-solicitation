import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
} from '@nestjs/common';
import { INJECTION_USECASE_DELETE_SURGERY_SOLICITATION } from 'src/domain/constants/injections/surgery-solicitation.constant';
import { IDeleteSurgerySolicitationUseCase } from 'src/domain/usecases/surgery-solicitation/delete.usecase';

@Controller('surgery-solicitation')
export class DeleteSurgerySolicitationController {
  constructor(
    @Inject(INJECTION_USECASE_DELETE_SURGERY_SOLICITATION)
    private readonly deleteSurgerySolicitationUseCase: IDeleteSurgerySolicitationUseCase,
  ) {}

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.deleteSurgerySolicitationUseCase.execute(id);
  }
}

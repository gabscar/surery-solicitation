import { Module } from '@nestjs/common';
import { SurgerySolicitationModule } from './surgery-solicitation/surgery-solicitation.module';

const modules = [SurgerySolicitationModule];

@Module({
  imports: [...modules],
  providers: [...modules],
})
export class ControllerModule {}

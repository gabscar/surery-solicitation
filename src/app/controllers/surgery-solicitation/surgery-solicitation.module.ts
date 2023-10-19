import { Module } from '@nestjs/common';

import { CreateSurgerySolicitationController } from './create.controller';
import { DeleteSurgerySolicitationController } from './delete.controller';
import { FindAllSurgerySolicitationController } from './findAll.controller';
import { FindByIdSurgerySolicitationController } from './findById.controller';
import { UpdateSurgerySolicitationController } from './update.controller';
import { CreateSurgerySolicitationEntityService } from 'src/infra/services/entities/surgery-solicitation/create.service';
import {
  INJECTION_REPOSITORY_SURGERY_SOLICITATION,
  INJECTION_SERVICE_CREATE_SURGERY_SOLICITATION,
  INJECTION_SERVICE_DELETE_SURGERY_SOLICITATION,
  INJECTION_SERVICE_FIND_ALL_SURGERY_SOLICITATION,
  INJECTION_SERVICE_FIND_BY_SURGERY_SOLICITATION,
  INJECTION_SERVICE_UPDATE_SURGERY_SOLICITATION,
  INJECTION_USECASE_CREATE_SURGERY_SOLICITATION,
  INJECTION_USECASE_DELETE_SURGERY_SOLICITATION,
  INJECTION_USECASE_FIND_ALL_SURGERY_SOLICITATION,
  INJECTION_USECASE_FIND_BY_SURGERY_SOLICITATION,
  INJECTION_USECASE_UPDATE_SURGERY_SOLICITATION,
} from 'src/domain/constants/injections/surgery-solicitation.constant';
import { UpdateSurgerySolicitationEntityService } from 'src/infra/services/entities/surgery-solicitation/update.service';
import { DeleteSurgerySolicitationEntityService } from 'src/infra/services/entities/surgery-solicitation/delete.service';
import { FindAllSurgerySolicitationEntityService } from 'src/infra/services/entities/surgery-solicitation/findAll.service';
import { FindBySurgerySolicitationEntityService } from 'src/infra/services/entities/surgery-solicitation/findBy.service';
import { CreateSurgerySolicitationUseCase } from 'src/useCases/surgery-solicitation/create.usecase';
import { UpdateSurgerySolicitationUseCase } from 'src/useCases/surgery-solicitation/update.usecase';
import { DeleteSurgerySolicitationUseCase } from 'src/useCases/surgery-solicitation/delete.usecase';
import { FindBySurgerySolicitationUseCase } from 'src/useCases/surgery-solicitation/findBy.usecase';
import { FindAllSurgerySolicitationUseCase } from 'src/useCases/surgery-solicitation/findAll.usecase';
import { SurgerySolicitationRepositoryDatabase } from 'src/infra/repositories/surgery-solicitation.repository';
import { DatabaseModule } from 'src/infra/database/database.module';

const servicesArr = [
  {
    useClass: CreateSurgerySolicitationEntityService,
    provide: INJECTION_SERVICE_CREATE_SURGERY_SOLICITATION,
  },
  {
    useClass: UpdateSurgerySolicitationEntityService,
    provide: INJECTION_SERVICE_UPDATE_SURGERY_SOLICITATION,
  },
  {
    useClass: DeleteSurgerySolicitationEntityService,
    provide: INJECTION_SERVICE_DELETE_SURGERY_SOLICITATION,
  },
  {
    useClass: FindAllSurgerySolicitationEntityService,
    provide: INJECTION_SERVICE_FIND_ALL_SURGERY_SOLICITATION,
  },
  {
    useClass: FindBySurgerySolicitationEntityService,
    provide: INJECTION_SERVICE_FIND_BY_SURGERY_SOLICITATION,
  },
];

const useCasesArr = [
  {
    useClass: CreateSurgerySolicitationUseCase,
    provide: INJECTION_USECASE_CREATE_SURGERY_SOLICITATION,
  },
  {
    useClass: UpdateSurgerySolicitationUseCase,
    provide: INJECTION_USECASE_UPDATE_SURGERY_SOLICITATION,
  },
  {
    useClass: DeleteSurgerySolicitationUseCase,
    provide: INJECTION_USECASE_DELETE_SURGERY_SOLICITATION,
  },
  {
    useClass: FindBySurgerySolicitationUseCase,
    provide: INJECTION_USECASE_FIND_BY_SURGERY_SOLICITATION,
  },
  {
    useClass: FindAllSurgerySolicitationUseCase,
    provide: INJECTION_USECASE_FIND_ALL_SURGERY_SOLICITATION,
  },
];

const repositoriesArr = [
  {
    useClass: SurgerySolicitationRepositoryDatabase,
    provide: INJECTION_REPOSITORY_SURGERY_SOLICITATION,
  },
];

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateSurgerySolicitationController,
    UpdateSurgerySolicitationController,
    DeleteSurgerySolicitationController,
    FindByIdSurgerySolicitationController,
    FindAllSurgerySolicitationController,
  ],
  providers: [...useCasesArr, ...servicesArr, ...repositoriesArr],
})
export class SurgerySolicitationModule {}

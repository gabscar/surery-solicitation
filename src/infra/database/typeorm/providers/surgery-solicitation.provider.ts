import { DataSource } from 'typeorm';
import { SurgerySolicitation } from '../entities/surgery-solicitation.entity';
import {
  INJECTION_DATABASE_PROVIDER,
  INJECTION_SURGERY_SOLICITATION_DATABASE_SERVICE,
} from 'src/infra/constants/database.constant';

export const surgerySolicitationDatabaseProviders = [
  {
    provide: INJECTION_SURGERY_SOLICITATION_DATABASE_SERVICE,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(SurgerySolicitation),
    inject: [INJECTION_DATABASE_PROVIDER],
  },
];

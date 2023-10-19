import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { surgerySolicitationDatabaseProviders } from './providers/surgery-solicitation.provider';
import { DataSourceOptions } from 'typeorm';
import { INJECTION_DATABASE_PROVIDER } from 'src/infra/constants/database.constant';

require('dotenv').config();

export const databaseProviders = [...surgerySolicitationDatabaseProviders];
export const config: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME_DEVELOPMENT,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
@Module({
  providers: [
    {
      provide: INJECTION_DATABASE_PROVIDER,
      useFactory: async () => {
        const dataSource = new DataSource(config);

        return dataSource.initialize();
      },
    },
    ...databaseProviders,
  ],
  exports: [...databaseProviders],
})
export class TypeOrmModule {}

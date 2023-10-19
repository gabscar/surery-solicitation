import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SurgerySolicitation } from '../database/typeorm/entities/surgery-solicitation.entity';
import { INJECTION_SURGERY_SOLICITATION_DATABASE_SERVICE } from '../constants/database.constant';
import { SurgeryTypeOrmAdapter } from '../adapters/entities/surgery-solicitation.typeorm.adapter';
import { ISurgerySolicitationRepositoryDatabase } from 'src/domain/repositories/surgery-solicitation.repository';
import {
  IUpdateSurgerySolicitationInput,
  IWhereUpdateSurgerySolicitationInput,
} from 'src/domain/interfaces/surgery-solicitation/update.interface';
import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';
import { IFindAllSurgerySolicitationEntityServiceInput } from 'src/domain/services/entities/surgery-solicitation/findAll.service';
import { IFindBySurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/findBy.interface';
import { ICreateSurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/create.interface';
import { IPaginationOutput } from 'src/domain/interfaces/common/pagination.interface';

@Injectable()
export class SurgerySolicitationRepositoryDatabase
  implements ISurgerySolicitationRepositoryDatabase
{
  constructor(
    @Inject(INJECTION_SURGERY_SOLICITATION_DATABASE_SERVICE)
    private readonly surgerySolicitationDatabaseService: Repository<SurgerySolicitation>,
  ) {}

  async create(
    params: ICreateSurgerySolicitationInput,
  ): Promise<SurgerySolicitationEntity> {
    const user = this.surgerySolicitationDatabaseService.create(params);

    await this.surgerySolicitationDatabaseService.save(user);

    return SurgeryTypeOrmAdapter.get(user);
  }

  async delete(id: string): Promise<void> {
    await this.surgerySolicitationDatabaseService.delete({ id });
  }

  async findAll(
    params: IFindAllSurgerySolicitationEntityServiceInput,
  ): Promise<IPaginationOutput<SurgerySolicitationEntity>> {
    const [users, max] =
      await this.surgerySolicitationDatabaseService.findAndCount();

    return SurgeryTypeOrmAdapter.list(users, params.pagination.page, max);
  }

  async findBy(
    params: IFindBySurgerySolicitationInput,
  ): Promise<SurgerySolicitationEntity> {
    const whereQuery = { [params.field]: params.value };

    const user = await this.surgerySolicitationDatabaseService.findOneOrFail({
      where: whereQuery,
    });

    return SurgeryTypeOrmAdapter.get(user);
  }

  async update(
    where: IWhereUpdateSurgerySolicitationInput,
    params: IUpdateSurgerySolicitationInput,
  ): Promise<SurgerySolicitationEntity> {
    const whereQuery = { id: where.id };

    const result = await this.surgerySolicitationDatabaseService.update(
      whereQuery,
      params,
    );

    if (result.affected > 0 === false) return null;

    const user = await this.findBy({ field: 'id', value: where.id });

    return SurgeryTypeOrmAdapter.get(user);
  }
}

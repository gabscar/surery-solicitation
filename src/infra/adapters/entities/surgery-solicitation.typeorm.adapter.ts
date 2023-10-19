import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';
import { SurgerySolicitation } from '../../database/typeorm/entities/surgery-solicitation.entity';
import { IPaginationOutput } from 'src/domain/interfaces/common/pagination.interface';

export class SurgeryTypeOrmAdapter {
  static get(user: SurgerySolicitation): SurgerySolicitationEntity {
    return this.adapt(user);
  }

  static list(
    surgerySolicitation: SurgerySolicitation[],
    page: number,
    max: number,
  ): IPaginationOutput<SurgerySolicitationEntity> {
    return {
      data: surgerySolicitation.map((solicitation) => this.adapt(solicitation)),
      meta: {
        taken: surgerySolicitation.length,
        page,
        max,
      },
    };
  }

  private static adapt(
    surgerySolicitation: SurgerySolicitation,
  ): SurgerySolicitationEntity {
    if (!surgerySolicitation) return null;

    return new SurgerySolicitationEntity({
      id: surgerySolicitation.id,
      code: surgerySolicitation.code,
      room: surgerySolicitation.room,
      procedures: surgerySolicitation.procedures,
      doctor: surgerySolicitation.doctor,
      hospital: surgerySolicitation.hospital,
      surgery_date: surgerySolicitation.surgery_date,
      general_observations: surgerySolicitation.general_observations,
      patient: surgerySolicitation.patient,
      createdAt: surgerySolicitation.createdAt,
      updatedAt: surgerySolicitation.updatedAt,
      deletedAt: surgerySolicitation.deletedAt,
    });
  }
}

import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';

export class SurgeryEntityMock {
  static create(userProps?: Partial<SurgerySolicitationEntity>) {
    return new SurgerySolicitationEntity({
      id: 'anyUserId',
      code: 'Any code',
      doctor: 'any doctor',
      room: 'A01',
      procedures: 'any procedure',
      hospital: 'any hospital',
      surgery_date: new Date(),
      general_observations: 'new observation',
      patient: 'new patient',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      ...userProps,
    });
  }
}

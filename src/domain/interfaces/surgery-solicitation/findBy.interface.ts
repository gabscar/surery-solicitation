import { SurgerySolicitationEntity } from 'src/domain/entities/surgery-solicitation.entity';

export type IFindBySurgerySolicitationInput = {
  value: string;
  field: keyof Pick<SurgerySolicitationEntity, 'id' | 'code'>;
};

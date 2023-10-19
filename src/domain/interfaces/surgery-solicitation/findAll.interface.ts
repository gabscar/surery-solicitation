import { IPaginationInput } from '../common/pagination.interface';

export interface IFindAllSurgerySolicitationInput
  extends Partial<IPaginationInput> {
  code?: string;
}

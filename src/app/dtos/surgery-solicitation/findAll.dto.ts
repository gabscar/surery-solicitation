import { IsOptional, IsString, MaxLength } from 'class-validator';
import { PaginationDto } from '../common/pagination.dto';
import { DEFAULT_MAX_LENGTH } from 'src/domain/constants/common.constant';
import { IFindAllSurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/findAll.interface';

export class FindAllSurgerySolicitationDto
  extends PaginationDto
  implements IFindAllSurgerySolicitationInput
{
  @IsOptional()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  code?: string;
}

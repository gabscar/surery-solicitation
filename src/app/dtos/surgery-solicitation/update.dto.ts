import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString, MaxLength } from 'class-validator';
import { DEFAULT_MAX_LENGTH } from 'src/domain/constants/common.constant';
import { IUpdateSurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/update.interface';

export class UpdateSurgerySolicitationDto
  implements IUpdateSurgerySolicitationInput
{
  @IsOptional()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  code: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  room: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  procedures: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  doctor: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  hospital: string;

  @IsOptional()
  @ApiProperty()
  @IsDate()
  surgery_date: Date;

  @IsOptional()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  general_observations: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  patient: string;
}

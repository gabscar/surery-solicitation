import { ApiProperty } from '@nestjs/swagger';

import { IsDateString, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { DEFAULT_MAX_LENGTH } from 'src/domain/constants/common.constant';
import { ICreateSurgerySolicitationInput } from 'src/domain/interfaces/surgery-solicitation/create.interface';

export class CreateSurgerySolicitationDto
  implements ICreateSurgerySolicitationInput
{
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  code: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  room: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  procedures: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  doctor: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  hospital: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsDateString()
  surgery_date: Date;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  general_observations: string;
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  patient: string;
}

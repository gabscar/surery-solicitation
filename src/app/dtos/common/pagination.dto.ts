import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';
import { TransformInNumber } from 'src/app/transformers/common.transform';
import { RequiredTakeIfPage } from 'src/app/validators/common.validator';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @RequiredTakeIfPage()
  @Transform(TransformInNumber)
  page?: number;

  @IsOptional()
  @IsNumber()
  @Transform(TransformInNumber)
  take?: number;
}

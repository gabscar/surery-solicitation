import { TransformFnParams } from 'class-transformer';
import { ONLY_NON_NUMBERS_REGEX } from 'src/domain/constants/regex.constant';

export function TransformInNumber({ value }: TransformFnParams) {
  if (!value) return;

  if (typeof value === 'number') return value;

  const stringNumber = value.replace(ONLY_NON_NUMBERS_REGEX, '');

  return Number(stringNumber);
}

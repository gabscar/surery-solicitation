import { HttpException, HttpStatus } from '@nestjs/common';
import { IErrorBody } from 'src/domain/interfaces/common/error.interface';

export class ApiException extends HttpException {
  constructor(body: IErrorBody, statusCode: HttpStatus) {
    super(body, statusCode);
  }
}

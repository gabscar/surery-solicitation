import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { IErrorBody } from 'src/domain/interfaces/common/error.interface';
import { ApiException } from '../exceptions/api.exception';

@Catch()
export class ErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let body: IErrorBody = {
      code: 'ISE-000',
      message: 'An internal server error has occurred',
      shortMessage: 'internalServerError',
    };

    if (
      exception instanceof ApiException ||
      exception instanceof HttpException
    ) {
      status = exception.getStatus();
      body = exception.getResponse() as any;
    }

    this.logMessage(request, status, body, exception);

    response.status(status).json({
      status,
      body,
    });
  }

  private logMessage(
    request: any,
    status: number,
    _body: string | object,
    exception: any,
  ) {
    const context = 'End Request';
    const body = `${request.method} ${
      request.path
    } STATUS=${status} MESSAGE=${JSON.stringify(_body)}`;

    if (status >= 500) {
      console.error(context, body, exception.stack);
    } else {
      console.warn(context, body);
    }
  }
}

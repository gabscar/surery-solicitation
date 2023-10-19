import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const startTime = Date.now();

    return next.handle().pipe(
      map((data) => {
        const status = httpContext.getResponse().statusCode;
        const endTime = Date.now();
        const duration = `${endTime - startTime}ms`;

        console.log(
          'End Request',
          `${request.method} ${request.path} ${status} ${duration}`,
        );

        return {
          data,
          path: request.path,
          method: request.method,
          status,
          duration,
        };
      }),
    );
  }
}

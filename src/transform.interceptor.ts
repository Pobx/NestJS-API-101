import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseEntity } from './response.model';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, ResponseEntity<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseEntity<T>> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status = response.status;

    const responseModel = new ResponseEntity<any>();
    responseModel.message = [];
    responseModel.statusCode = response['statusCode'];
    responseModel.timestamp = new Date().toISOString();
    responseModel.path = request.url;

    return next.handle().pipe(
      map(data => {
        responseModel.Entity = data;
        return responseModel;
      }),
    );
  }
}

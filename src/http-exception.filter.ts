import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

import { Request, Response } from 'express';
import { ResponseEntity } from './response.model';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message;
    const responseModel = new ResponseEntity<any>();
    console.log(exception.getResponse());
    const errorMessages = exception.getResponse();

    responseModel.Entity = null;
    responseModel.message = message;
    responseModel.statusCode = status;
    responseModel.timestamp = new Date().toISOString();
    responseModel.path = request.url;
    if (errorMessages != null) {
      responseModel.message = errorMessages['message'];
    }

    response.status(status).json(responseModel);
  }
}

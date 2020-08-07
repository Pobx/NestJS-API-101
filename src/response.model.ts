export class ResponseEntity<T> {
  Entity: T;
  statusCode?: number;
  message?: string;
  timestamp?: any;
  path?: string;

}

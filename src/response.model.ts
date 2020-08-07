export class ResponseEntity<T> {
  Entitiy:T;
  statusCode?: number;
  message?: string;
  timestamp?: any;
  path?: string;
}
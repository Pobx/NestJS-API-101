export class ResponseEntity<T> {
  Entity: T;
  statusCode?: number;
  message?: string | string[];
  timestamp?: any;
  path?: string;
}

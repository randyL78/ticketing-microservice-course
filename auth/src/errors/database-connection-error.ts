import { CustomResponseError } from "./custom-response-error";

export class DatabaseConnectionError extends CustomResponseError {
  statusCode = 500;

  constructor() {
    super("Error connecting to database");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      { message: "Error connecting to database"}
    ];
  }
}
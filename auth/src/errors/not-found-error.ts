import { CustomResponseError } from "./custom-response-error";

export class NotFoundError extends CustomResponseError {
  statusCode = 404;

  constructor() {
    super("Route not found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [
      { message: "Not Found"}
    ];
  }
}
import { CustomResponseError } from "./custom-response-error";

export class NotFoundError extends CustomResponseError {
  statusCode = 404;

  constructor(url: String) {
    super(`Route: ${url} not found`);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [
      { message: "Not Found"}
    ];
  }
}
import { CustomResponseError } from "./custom-response-error";

export class BadRequestError extends CustomResponseError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{
      message: this.message
    }]
  }
}
import { ValidationError } from "express-validator";
import { CustomResponseError } from "./custom-response-error";

export class RequestValidationError extends CustomResponseError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super("Invalid request parameters");

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(error => {
      return { message: error.msg, field: error.param };
    });
  }
}
export abstract class CustomResponseError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomResponseError.prototype);
  }

  abstract serializeErrors(): { message: string, field?: string}[];
}
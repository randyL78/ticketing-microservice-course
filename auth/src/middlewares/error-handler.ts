import { Request, Response, NextFunction } from 'express';
import { CustomResponseError } from '../errors/custom-response-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.message);

  if (err instanceof CustomResponseError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    errors: [
      { message: err.message }
    ]});
};
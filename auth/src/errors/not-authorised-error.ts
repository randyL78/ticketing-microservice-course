import { CustomResponseError } from './custom-response-error'

export class NotAuthorisedError extends CustomResponseError {
  statusCode = 401

  constructor () {
    super('Not authorised')

    Object.setPrototypeOf(this, NotAuthorisedError.prototype)
  }

  serializeErrors () {
    return [
      {
        message: 'Not Authorised'
      }
    ]
  }
}

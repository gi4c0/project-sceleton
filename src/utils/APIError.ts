export class APIError extends Error {
  public httpCode: number
  public userMessage: string

  constructor(params: IErr) {
    super()
    this.userMessage = params.userMessage || DEFAULT_ERR_MSG
    this.message = params.message || params.userMessage
    this.httpCode = params.httpCode || 500
  }
}

interface IErr {
  httpCode?: number
  userMessage?: string
  message?: string
}

const DEFAULT_ERR_MSG = 'Addresses could not be processed at this time, ' +
  'please try again later. If the problem persists, ' +
  'please contact support@connected2fiber.com'

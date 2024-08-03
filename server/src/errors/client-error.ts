export class ClientError extends Error {
  public readonly message: string
  public readonly statusCode: number

  constructor(message: string, statusCode = 404) {
    super()
    this.message = message
    this.statusCode = statusCode
  }
}

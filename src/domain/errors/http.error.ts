export class HttpError extends Error {
  constructor(message: string, private readonly code: number) {
    super(message);
  }
}

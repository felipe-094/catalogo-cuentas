export class DomainError extends Error {
  constructor(
    readonly field: string,
    message: string,
    readonly kind: 'validation' | 'conflict' | 'not_found',
  ) {
    super(message);
  }
}
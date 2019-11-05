export class BaseException extends Error {
  public constructor(message?: string) {
    super(message);
  }
}

export class ArgumentNullException extends BaseException {
  public constructor(argument?: string) {
    super(`Argument Null Exception: ${argument} cannot be null`);
  }
}


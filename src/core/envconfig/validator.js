// @flow

function ValidatorError(message?: string) {
  this.name = 'CfgValidatorError';
  this.message = message;
}
ValidatorError.prototype = Object.create(Error.prototype);

const defaultInvalidTypeof: string = 'undefined';

class NotSetFieldValidator {
  x: string = defaultInvalidTypeof;

  constructor(x?: string) {
    if (x) this.x = x;
  }

  validate(cfg: any) {
    if (!cfg) {
      return;
    }
    Object.keys(cfg).forEach((property) => {
      if (Object.prototype.hasOwnProperty.call(cfg, property)) {
        if (typeof cfg[property] === 'object') {
          this.validate(cfg[property]);
        }

        if (typeof cfg[property] === this.x) {
          throw new ValidatorError(`Field "${property}" was not set`);
        }
      }
    });
  }
}

export {
    NotSetFieldValidator,
    ValidatorError,
};

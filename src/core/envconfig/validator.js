// @flow

function ValidatorError(message?: string) {
  this.name = 'CfgValidatorError';
  this.message = message;
}
ValidatorError.prototype = Object.create(Error.prototype);

function validateNotSetField(cfg: any) {
  if (!cfg) {
    throw new ValidatorError('Given object is undefined');
  }
  Object.keys(cfg).forEach((property) => {
    if (Object.prototype.hasOwnProperty.call(cfg, property)) {
      if (cfg[property] && typeof cfg[property] === 'object') {
        validateNotSetField(cfg[property]);
      }

      if (cfg[property] == null || typeof cfg[property] === 'undefined') {
        throw new ValidatorError(`Field "${property}" was not set`);
      }
    }
  });
}

export {
    validateNotSetField,
    ValidatorError,
};
